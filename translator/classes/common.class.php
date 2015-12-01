<?php
/**
 * Translator Revolution WP Plugin
 * http://goo.gl/1kVfu
 *
 * LICENSE
 *
 * You need to buy a license if you want use this script.
 * http://codecanyon.net/legal/membership/
 *
 * @package    Translator Revolution Lite
 * @copyright  Copyright (c) 2012, Federico Stabile, www.surstudio.net
 * @license    http://codecanyon.net/licenses/regular_extended/
 * @version    1.8
 * @date       2012-07-03
 */

class SurStudioPluginTranslatorRevolutionLiteCommon {

	public static function printHeaders() {

		header('Content-Type:application/json;charset=UTF-8');
		header('Content-Disposition:attachment');

	}
	
	public static function isOpenSSLInstalled() {

		return defined('OPENSSL_VERSION_TEXT');
		
	}
	
	public static function isFolderWritable($_folder) {
		
		if (!SurStudioPluginTranslatorRevolutionLiteConfig::verifyCacheWritable())
			return true;
		
		return @is_writable($_folder) && is_array(@scandir($_folder)) ? true : $_folder;
		
	}

	public static function areFolderFilesWritable($_folder) {

		if (!SurStudioPluginTranslatorRevolutionLiteConfig::verifyCacheWritable())
			return true;
		
		$contents = @scandir($_folder);
		
		foreach ($contents as $name) {
			$file = $_folder . '/' . $name;
			if (self::endsWith($name, '.xml') && @is_file($file) && !@is_writable($file))
				return $name;
		}
		
		return true;
		
	}
	
	public static function getUserAgent() {
		
		return isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
		
	}
	
	public static function getUrl($_server) {

		$result = isset($_server['HTTP_REFERER']) ? parse_url($_server['HTTP_REFERER'], PHP_URL_PATH) : false;
		
		if (!empty($result)) {
		
			$query = parse_url($_server['HTTP_REFERER'], PHP_URL_QUERY);
			if ($result !== false && !empty($query))
				$result .= '?' . str_replace('&', '&amp;', $query);

		}
		
		return $result;
		
	}
	
	public static function hashUrl($_url) {

		$salt = '>=/{Dhaay933O).IGzxmzsdf4sIt+7.aFgOiQI}9Ofsd46+63f -YI++c/<J}#]s';
		return hash('md5', hash('md5', $_url . $salt, false) . $salt, false);
		
	}
	
	public static function hashText($_text) {
		
		if (is_array($_text)) {
			array_walk($_text, create_function('&$v,$k', '$v = hash(\'sha256\', $v, false);'));
			return $_text;
		}
		else		
			return hash('sha256', $_text, false);
		
	}
	
	public static function httpBuildStr($_array) {
		
		$result = '';

		foreach($_array as $key => $value) 
			$result .= $key . '=' . $value . '&';
			
		return rtrim($result, '&');
				
	}
	
	public static function parseToken($_token, $_key, $_nd) {
	
		if (function_exists('mcrypt_decrypt'))
			$result = self::_decrypt($_token, $_key, $_nd);
		else {
			$result = '';
			$string = base64_decode(str_rot13(base64_decode($_token))); $_key = md5($_key . $_nd . self::getUserAgent());
			for ($i=0; $i<strlen($string); $i++) { $char = substr($string, $i, 1); $keychar = substr($_key, ($i % strlen($_key))-1, 1); $ordChar = ord($char); $ordKeychar = ord($keychar); $sum = $ordChar - $ordKeychar; $char = chr($sum); $result .= $char; }
		}
		
        return @unserialize($result);
		
	}
	
	public static function getCacheLocation() {
		
		return dirname(__FILE__) . '/../cache/';
		
	}
	
	public static function log($_string, $_key) {
		
		$salt = '7ZgS?x,:IK9G8fJdr43YK<LKr]yHT^v!>QPh*/>2BYE:TDS?<?<R1m06},)`?E?7';
		$key = hash('md5', hash('md5', $_key . $salt, false) . $salt, false);
		
		@error_log($_string . "\n" . str_repeat('-', 100) . "\n\n", 3, self::getCacheLocation() . 'error_' . $key . '.log');
		
	}
	
	protected static function _unchunk($_str) {

		$result = '';
		$parts = explode("\r\n", $_str);
		$chunkLen = 0;
		$thisChunk = '';

		while (!is_null($part = array_shift($parts))) {
			
			if ($chunkLen) {
				
				$thisChunk .= $part."\r\n";
				
				if (strlen($thisChunk) == $chunkLen) {
					$result .= $thisChunk;
					$chunkLen = 0;
					$thisChunk = '';
				} 
				else if (strlen($thisChunk) == $chunkLen + 2) {
					$result .= substr($thisChunk, 0, -2);
					$chunkLen = 0;
					$thisChunk = '';
				} 
				else if (strlen($thisChunk) > $chunkLen)
					return false;
								
			} 
			else {
				
				if ($part === '') 
					continue;
				
				if (!$chunkLen = hexdec($part)) 
					break;
			
			}
		}

		return $chunkLen ? false : $result;

	}

	public static function parseHttpResponse($string, $key) {

		$headers = array();
		$content = '';
		$str = strtok($string, "\n");
		$h = null;
		while ($str !== false) {
			if ($h and trim($str) === '') {                
				$h = false;
				continue;
			}
			if ($h !== false and false !== strpos($str, ':')) {
				$h = true;
				list($headername, $headervalue) = explode(':', trim($str), 2);
				$headername = strtolower($headername);
				$headervalue = ltrim($headervalue);
				if (isset($headers[$headername])) 
					$headers[$headername] .= ',' . $headervalue;
				else 
					$headers[$headername] = $headervalue;
			}
			if ($h === false) {
				$content .= $str."\n";
			}
			$str = strtok("\n");
		}

		if (array_key_exists('transfer-encoding', $headers) && $headers['transfer-encoding'] == 'chunked')
			$result = self::_unchunk($content);
		else
			$result = $content;

		$result = trim($result);
		
		if (array_key_exists('content-encoding', $headers)) {
			switch ($headers['content-encoding']) {
				case 'gzip':
					$result = gzdecode($result);
					break;
				case 'compress':
					$result = gzuncompress($result);
					break;
				case 'deflate':
					$result = gzinflate($result);
					break;
			}
		}

		return $result;

	}
	
	protected static function _decrypt($_string, $_key, $_nd) {
		
		$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB);
		$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);

		return mcrypt_decrypt(MCRYPT_RIJNDAEL_256, md5($_key . $_nd . self::getUserAgent()), base64_decode($_string), MCRYPT_MODE_ECB, $iv);

	}
	
	public static function startsWith($_string, $_start) {
		
		$length = strlen($_start);
		return substr($_string, 0, $length) === $_start;
		
	}

	public static function endsWith($_string, $_end) {
	
		return strcmp(substr($_string, strlen($_string) - strlen($_end)), $_end) === 0;
	
	}

	public static function getVariable($_var_name, $_method='POST', $_escape_html=false, $_strip_quotes=false) {

		if (strtolower($_method) == 'get')
			$result = isset($_GET[$_var_name]) ? $_GET[$_var_name] : false;
		else
			$result = isset($_POST[$_var_name]) ? $_POST[$_var_name] : false;

		if ($result !== false && $_strip_quotes)
			$result = preg_replace('/\"|\'|\\\\/', '', $result);

		if ($result !== false) {
			if (is_array($result)) {
				array_walk_recursive($result, create_function('&$val', '$val = stripslashes($val);'));
				return $result;
			}
			else
				$result = stripslashes($result);
		}

		return $_escape_html ? self::escapeHtmlBrackets($result) : $result;

	}

}

/**_______________________________________
 *
 *  SurStudioPluginTranslatorRevolutionLiteFastJSON,
 *	simple and fast Pear Service_JSON encoder/decoder alternative
 *	[http://pear.php.net/pepr/pepr-proposal-show.php?id=198]
 * ---------------------------------------
 * This class is about two time faster than Pear Service_JSON class.
 * This class is probably not powerful as Service_JSON but it has
 * no dependencies and converts correctly ASCII range 0x00 - 0x1F too.
 * There's any string convertion, just regular RFC specific characters are converted
 * into \u00XX string.
 * To don't have problems with other chars try to use utf8_encode($json_encoded_string).
 * To recieve correctly JSON strings from JavaScript use encodeURIComponent then
 * use, if is necessary, utef8_decode before JS to PHP convertion.
 * decode method doesn't returns a standard object class but You can
 * create the corret class directly with SurStudioPluginTranslatorRevolutionLiteFastJSON::convert method
 * and with them You can manage JS Date objects too.
 * ---------------------------------------
 * Summary of static public methods
 *
 * 	convert
 *			extra, special method
 *
 *	decode
 *			converts a valid JSON string
 *			into a native PHP variable
 *
 *	encode
 *			converts a native php variable
 *			into a valid JSON string
 * ---------------------------------------
 *
 * Special SurStudioPluginTranslatorRevolutionLiteFastJSON::convert method Informations
 * _______________________________________
 * --------------------------------------- 
 * This method is used by SurStudioPluginTranslatorRevolutionLiteFastJSON::encode method but should be used
 * to do these convertions too:
 *
 * - JSON string to time() integer:
 *
 *		SurStudioPluginTranslatorRevolutionLiteFastJSON::convert(decodedDate:String):time()
 *
 *	If You recieve a date string rappresentation You
 *	could convert into respective time() integer.
 *	Example:
 *		SurStudioPluginTranslatorRevolutionLiteFastJSON::convert(SurStudioPluginTranslatorRevolutionLiteFastJSON::decode($clienttime));
 *		// i.e. $clienttime = 2006-11-09T14:42:30
 *		// returned time will be an integer useful with gmdate or date
 *		// to create, for example, this string
 *              // Thu Nov 09 2006 14:42:30 GMT+0100 (Rome, Europe)
 *
 * - time() to JSON string:
 *
 *		SurStudioPluginTranslatorRevolutionLiteFastJSON::convert(time():Int32, true:Boolean):JSON Date String format
 *
 *	You could send server time() informations and send them to clients.
 *	Example:
 *		SurStudioPluginTranslatorRevolutionLiteFastJSON::convert(time(), true);
 *		// i.e. 2006-11-09T14:42:30
 *
 * - associative array to generic class:
 *
 *		SurStudioPluginTranslatorRevolutionLiteFastJSON::convert(array(params=>values), new GenericClass):new Instance of GenericClass
 *
 *	With a decoded JSON object You could convert them
 *	into a new instance of your Generic Class.
 *	Example:
 *		class MyClass {
 *			var	$param = "somevalue";
 *			function MyClass($somevar) {
 *				$this->somevar = $somevar;
 *			};
 *			function getVar = function(){
 *				return $this->somevar;
 *			};
 *		};
 *		
 *		$instance = new MyClass("example");
 *		$encoded = SurStudioPluginTranslatorRevolutionLiteFastJSON::encode($instance);
 *		// {"param":"somevalue"}
 *		
 *		$decoded = SurStudioPluginTranslatorRevolutionLiteFastJSON::decode($encoded);
 *		// $decoded instanceof Object	=> true
 *		// $decoded instanceof MyClass	=> false
 *		
 *		$decoded = SurStudioPluginTranslatorRevolutionLiteFastJSON::convert($decoded, new MyClass("example"));
 *		// $decoded instanceof Object	=> true
 *		// $decoded instanceof MyClass	=> true
 *
 *		$decoded->getVar(); // example
 *
 * ---------------------------------------
 *
 * @author		Andrea Giammarchi
 * @site		http://www.devpro.it/
 * @version		0.4 [fixed string convertion problems, add stdClass optional convertion instead of associative array (used by default)]
 * @requires		anything
 * @compatibility	PHP >= 4
 * @license
 * ---------------------------------------
 * 
 * Copyright (c) 2006 - 2007 Andrea Giammarchi
 *
 * Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated
 * documentation files (the "Software"),
 * to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * _______________________________________
 */
class SurStudioPluginTranslatorRevolutionLiteFastJSON {

	// public methods

	/**
	 * public static method
	 *
	 *	SurStudioPluginTranslatorRevolutionLiteFastJSON::convert(params:* [, result:Instance]):*
	 *
	 * @param	*		String or Object
	 * @param	Instance	optional new generic class instance if first
	 *				parameter is an object.
	 * @return	*		time() value or new Instance with object parameters.
	 *
	 * @note	please read Special SurStudioPluginTranslatorRevolutionLiteFastJSON::convert method Informations
	 */
	public static function convert($params, $result = null){
		switch(gettype($params)){
			case	'array':
					$tmp = array();
					foreach($params as $key => $value) {
						if(($value = SurStudioPluginTranslatorRevolutionLiteFastJSON::encode($value)) !== '')
							array_push($tmp, SurStudioPluginTranslatorRevolutionLiteFastJSON::encode(strval($key)).':'.$value);
					};
					$result = '{'.implode(',', $tmp).'}';
					break;
			case	'boolean':
					$result = $params ? 'true' : 'false';
					break;
			case	'double':
			case	'float':
			case	'integer':
					$result = $result !== null ? strftime('%Y-%m-%dT%H:%M:%S', $params) : strval($params);
					break;
			case	'NULL':
					$result = 'null';
					break;
			case	'string':
					$i = create_function('&$e, $p, $l', 'return intval(substr($e, $p, $l));');
					if(preg_match('/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$/', $params))
						$result = mktime($i($params, 11, 2), $i($params, 14, 2), $i($params, 17, 2), $i($params, 5, 2), $i($params, 9, 2), $i($params, 0, 4));
					break;
			case	'object':
					$tmp = array();
					if(is_object($result)) {
						foreach($params as $key => $value)
							$result->$key = $value;
					} else {
						$result = get_object_vars($params);
						foreach($result as $key => $value) {
							if(($value = SurStudioPluginTranslatorRevolutionLiteFastJSON::encode($value)) !== '')
								array_push($tmp, SurStudioPluginTranslatorRevolutionLiteFastJSON::encode($key).':'.$value);
						};
						$result = '{'.implode(',', $tmp).'}';
					}
					break;
		}
		return $result;
	}

	/**
	 * public method
	 *
	 *	SurStudioPluginTranslatorRevolutionLiteFastJSON::decode(params:String[, useStdClass:Boolean]):*
	 *
	 * @param	String	valid JSON encoded string
	 * @param	Bolean	uses stdClass instead of associative array if params contains objects (default false)
	 * @return	*	converted variable or null
	 *				is params is not a JSON compatible string.
	 * @note	This method works in an optimist way. If JSON string is not valid
	 * 		the code execution will die using exit.
	 *		This is probably not so good but JSON is often used combined with
	 *		XMLHttpRequest then I suppose that's better more protection than
	 *		just some WARNING.
	 *		With every kind of valid JSON string the old error_reporting level
	 *		and the old error_handler will be restored.
	 *
	 * @example
	 *		SurStudioPluginTranslatorRevolutionLiteFastJSON::decode('{"param":"value"}'); // associative array
	 *		SurStudioPluginTranslatorRevolutionLiteFastJSON::decode('{"param":"value"}', true); // stdClass
	 *		SurStudioPluginTranslatorRevolutionLiteFastJSON::decode('["one",two,true,false,null,{},[1,2]]'); // array
	 */
	public static function decode($encode, $stdClass = false){
		$pos = 0;
		$slen = is_string($encode) ? strlen($encode) : null;
		if($slen !== null) {
			$error = error_reporting(0);
			set_error_handler(array('SurStudioPluginTranslatorRevolutionLiteFastJSON', '__exit'));
			$result = SurStudioPluginTranslatorRevolutionLiteFastJSON::__decode($encode, $pos, $slen, $stdClass);
			error_reporting($error);
			restore_error_handler();
		}
		else
			$result = null;
		return $result;
	}

	/**
	 * public method
	 *
	 *	SurStudioPluginTranslatorRevolutionLiteFastJSON::encode(params:*):String
	 *
	 * @param	*		Array, Boolean, Float, Int, Object, String or NULL variable.
	 * @return	String		JSON genric object rappresentation
	 *				or empty string if param is not compatible.
	 *
	 * @example
	 *		SurStudioPluginTranslatorRevolutionLiteFastJSON::encode(array(1,"two")); // '[1,"two"]'
	 *
	 *		$obj = new MyClass();
	 *		obj->param = "value";
	 *		obj->param2 = "value2";
	 *		SurStudioPluginTranslatorRevolutionLiteFastJSON::encode(obj); // '{"param":"value","param2":"value2"}'
	 */
	public static function encode($decode){
		$result = '';
		switch(gettype($decode)){
			case	'array':
			
					if (count(array_keys($decode)) == 2 && array_key_exists('value', $decode) && array_key_exists('type', $decode) && $decode['type'] == 'literal')
						$result = $decode['value'];
					else {
				
						if(!count($decode) || array_keys($decode) === range(0, count($decode) - 1)) {
							$keys = array();
							foreach($decode as $value) {
								if(($value = SurStudioPluginTranslatorRevolutionLiteFastJSON::encode($value)) !== '')
									array_push($keys, $value);
							}
							$result = '['.implode(',', $keys).']';
						}
						else
							$result = SurStudioPluginTranslatorRevolutionLiteFastJSON::convert($decode);
							
					}
					break;
			case	'string':
					$replacement = SurStudioPluginTranslatorRevolutionLiteFastJSON::__getStaticReplacement();
					$result = '"'.str_replace($replacement['find'], $replacement['replace'], $decode).'"';
					break;
			default:
					if(!is_callable($decode))
						$result = SurStudioPluginTranslatorRevolutionLiteFastJSON::convert($decode);
					break;
		}
		return $result;
	}

	// private methods, uncommented, sorry
	protected static function __getStaticReplacement(){
		static $replacement = array('find'=>array(), 'replace'=>array());
		if($replacement['find'] == array()) {
			foreach(array_merge(range(0, 7), array(11), range(14, 31)) as $v) {
				$replacement['find'][] = chr($v);
				$replacement['replace'][] = "\\u00".sprintf("%02x", $v);
			}
			$replacement['find'] = array_merge(array(chr(0x5c), chr(0x2F), chr(0x22), chr(0x0d), chr(0x0c), chr(0x0a), chr(0x09), chr(0x08)), $replacement['find']);
			$replacement['replace'] = array_merge(array('\\\\', '\\/', '\\"', '\r', '\f', '\n', '\t', '\b'), $replacement['replace']);
		}	
		return $replacement;
	}
	
	protected static function __decode(&$encode, &$pos, &$slen, &$stdClass){
		switch($encode{$pos}) {
			case 't':
				$result = true;
				$pos += 4;
				break;
			case 'f':
				$result = false;
				$pos += 5;
				break;
			case 'n':
				$result = null;
				$pos += 4;
				break;
			case '[':
				$result = array();
				++$pos;
				while($encode{$pos} !== ']') {
					array_push($result, SurStudioPluginTranslatorRevolutionLiteFastJSON::__decode($encode, $pos, $slen, $stdClass));
					if($encode{$pos} === ',')
						++$pos;
				}
				++$pos;
				break;
			case '{':
				$result = $stdClass ? new stdClass : array();
				++$pos;
				while($encode{$pos} !== '}') {
					$tmp = SurStudioPluginTranslatorRevolutionLiteFastJSON::__decodeString($encode, $pos);
					++$pos;
					if($stdClass)
						$result->$tmp = SurStudioPluginTranslatorRevolutionLiteFastJSON::__decode($encode, $pos, $slen, $stdClass);
					else
						$result[$tmp] = SurStudioPluginTranslatorRevolutionLiteFastJSON::__decode($encode, $pos, $slen, $stdClass);
					if($encode{$pos} === ',')
						++$pos;
				}
				++$pos;
				break;
			case '"':
				switch($encode{++$pos}) {
					case '"':
						$result = "";
						break;
					default:
						$result = SurStudioPluginTranslatorRevolutionLiteFastJSON::__decodeString($encode, $pos);
						break;
				}
				++$pos;
				break;
			default:
				$tmp = '';
				preg_replace('/^(\-)?([0-9]+)(\.[0-9]+)?([eE]\+[0-9]+)?/e', '$tmp = "\\1\\2\\3\\4"', substr($encode, $pos));
				if($tmp !== '') {
					$pos += strlen($tmp);
					$nint = intval($tmp);
					$nfloat = floatval($tmp);
					$result = $nfloat == $nint ? $nint : $nfloat;
				}
				break;
		}
		return $result;
	}
	
	protected static function __decodeString(&$encode, &$pos) {
		$replacement = SurStudioPluginTranslatorRevolutionLiteFastJSON::__getStaticReplacement();
		$endString = SurStudioPluginTranslatorRevolutionLiteFastJSON::__endString($encode, $pos, $pos);
		$result = str_replace($replacement['replace'], $replacement['find'], substr($encode, $pos, $endString));
		$pos += $endString;
		return $result;
	}
	
	protected static function __endString(&$encode, $position, &$pos) {
		do {
			$position = strpos($encode, '"', $position + 1);
		}while($position !== false && SurStudioPluginTranslatorRevolutionLiteFastJSON::__slashedChar($encode, $position - 1));
		if($position === false)
			trigger_error('', E_USER_WARNING);
		return $position - $pos;
	}
	
	protected static function __exit($str, $a, $b) {
		exit($a.'FATAL: SurStudioPluginTranslatorRevolutionLiteFastJSON decode method failure [malicious or incorrect JSON string]');
	}
	
	protected static function __slashedChar(&$encode, $position) {
		$pos = 0;
		while($encode{$position--} === '\\')
			$pos++;
		return $pos % 2;
	}
}

class SurStudioPluginTranslatorRevolutionLiteFileHandler {

	protected static $_files = array();

	protected static function _get_file($_file, $_mode) {
		
		self::$_files[$_file] = @fopen($_file, $_mode);
		
		if (!self::$_files[$_file])
			return false;
		
		self::_lock($_file, $_mode);
		
		return self::$_files[$_file];
		
	}
	
	protected static function _lock($_file, $_mode) {

		if ($_mode == 'r')
			flock(self::$_files[$_file], LOCK_SH);

		if ($_mode == 'wb' || $_mode == 'x')
			flock(self::$_files[$_file], LOCK_EX);

	}
	
	protected static function _unlock($_file) {
		
		flock(self::$_files[$_file], LOCK_UN);
		fclose(self::$_files[$_file]);
		unset(self::$_files[$_file]);
		
	}
	
	public static function read($_file) {
		
		$file = self::_get_file($_file, 'r');
		
		if (!$file)
			return false;
		
		$contents = '';

		while (!feof($file))
		  $contents .= fread($file, 8192);

		self::_unlock($_file);

		return $contents;
		
	}
	
	public static function write($_file, $_contents) {
		
		$file = self::_get_file($_file, 'wb');
		
		if (!$file) {
			SurStudioPluginTranslatorRevolutionLiteConfig::setCacheFlag(false);
			return false;
		}
		
		$result = fwrite($file, $_contents);
		fflush($file);
		
		self::_unlock($_file);

		return $result;
		
	}
	
	public static function create($_file, $_contents) {
		
		$file = self::_get_file($_file, 'x');
		
		if (!$file)
			return false;
		
		$result = fwrite($file, $_contents);
		
		self::_unlock($_file);

		return $result;
		
	}
	
}

class SurStudioPluginTranslatorRevolutionLiteJSON {
     /**
     *    Was parsed with an error?
     *    
     *    var bool
     *    @access private
     */
    var $error;
    
    function SurStudioPluginTranslatorRevolutionLiteJSON() {
        $this->error = false;
    }
    
    static public function decode($_text) {
		
		$me = new self();
		return $me->unserialize($_text);
		
	}
	
    static public function encode($_object) {

		$me = new self();
		return $me->serialize($_object);
		
	}
    
    /**
     *    Serialize
     *
     *    Serialize a PHP OBJECT or an ARRAY into 
     *    SurStudioPluginTranslatorRevolutionLiteJSON notation.
     *
     *    param mixed $obj Object or array to serialize
     *    return string SurStudioPluginTranslatorRevolutionLiteJSON.
     */
    function serialize($obj) {
        if ( is_object($obj) ) {
            $e = get_object_vars($obj);
            /* bug reported by Ben Rowe */
            /* Adding default empty array if the */
            /* object doesn't have any property */
            $properties = array();
            foreach ($e as $k => $v) {
                $properties[] = $this->_serialize( $k,$v );
            }
            return "{".implode(",",$properties)."}";
        } else if ( is_array($obj) ) {
            return $this->_serialize('',$obj);
        }
    }
    
    /**
     *    UnSerialize
     *
     *    Transform an SurStudioPluginTranslatorRevolutionLiteJSON text into a PHP object
     *    and return it.
     *    @access public 
     *    @param string $text SurStudioPluginTranslatorRevolutionLiteJSON text
     *    @return mixed PHP Object, array or false.
     */
    function unserialize( $text ) {
        $this->error = false;
        
        return !$this->error ? $this->_unserialize($text) : false;
    }
    
    /**
     *    UnSerialize
     *
     *    Transform an SurStudioPluginTranslatorRevolutionLiteJSON text into a PHP object
     *    and return it.
     *    @access private 
     *    @param string $text SurStudioPluginTranslatorRevolutionLiteJSON text
     *    @return mixed PHP Object, array or false.
     */
    function _unserialize($text) {
        $ret = new stdClass;
         
        while (  $f = $this->getNextToken($text,$i,$type)  ) {
            switch ( $type ) {
                case 6:
                    $tmp = $this->_unserializeArray($text);
                    $ret = $tmp[0];
                    break;
                case 2:
                    $g=0;
                    do  {
                        $varName = $this->getNextToken($f,$g,$xType);
                        if ( $xType != 1 )  {
                            return false; /* error parsing */
                        }
                        $this->getNextToken($f,$g,$xType);
                        if ( $xType != 4) return false;
                        $value = $this->getNextToken($f,$g,$xType);
                        
                        if ( $xType == 2) {
                            $ret->$varName = $this->unserialize( "{".$value."}" );
                            $g--;
                        } else if ($xType == 6) {
                            $ret->$varName = $this->_unserializeArray( $value);
                            $g--;
                        } else
                            $ret->$varName = $value;
                        
                        $this->getNextToken($f,$g,$xType);
                    } while ( $xType == 5);
                    break;
                default:
                    $this->error = true;
                    break 2;
            }
        }
        return $ret;
    }
    
    /**
     *    SurStudioPluginTranslatorRevolutionLiteJSON Array Parser
     *
     *    This method transform an SurStudioPluginTranslatorRevolutionLiteJSON-array into a PHP 
     *    array
     *    @access private
     *    @param string $text String to parse
     *    @return Array PHP Array
     */
    function _unserializeArray($text) {
        $r = array();
        do {
            $f = $this->getNextToken($text,$i,$type);
            switch ( $type ) {
                case 1:
                case 3:
                    $r[] = $f;
                    break;
                case 2:
                    $r[] = $this->unserialize("{".$f."}");
                    $i--;
                    break;
                case 6: 
                    $r[] = $this->_unserializeArray($f);
                    $i--;
                    break;
                    
            }
            $this->getNextToken($text,$i,$type);
        } while ( $type == 5);
        
        return $r;
    }
    
    /**
     *  Tokenizer
     *
     *  Return to the Parser the next valid token and the type     
     *  of the token. If the tokenizer fails it returns false.
     *    
     *    @access private
     *  @param string $e Text to extract token
     *  @param integer $i  Start position to search next token
     *  @param integer $state Variable to get the token type
     *  @return string|bool Token in string or false on error.
     */
    function getNextToken($e, &$i, &$state) {
        $state = 0;
        $end = -1;
        $start = -1;

        $i = (int) $i;
       
        while ( $i < strlen($e) && $end == -1 ) {
            switch( $e[$i] ) {
                /* objects */
                case "{":
                case "[":
                    $_tag = $e[$i]; 
                    $_endtag = $_tag == "{" ? "}" : "]";
                    if ( $state == 0 ) {
                        $start = $i+1;
                        switch ($state) {
                            case 0:
                                $aux = 1; /* for loop objects */
                                $state = $_tag == "{" ? 2 : 6;
                                break;
                            default:
                                break 2; /* exit from switch and while */
                        }
                        while ( ++$i && $i < strlen($e) && $aux != 0 ) {
                            switch( $e[$i] ) {
                                case $_tag:
                                    $aux++;
                                    break;
                                case $_endtag:
                                    $aux--;
                                    break;
                            }
                        }
                        $end = $i-1;
                    }
                    break;
                
                case '"':
                case "'":
                    $state = 1;
                    $buf = "";
                    while ( ++$i && $i < strlen($e) && $e[$i] != '"' ) {
                        if ( $e[$i] == "\\") 
                            $i++;
                        $buf .= $e[$i];
                    }
                    $i++;
                    return eval('return "'.str_replace('"','\"',$buf).'";');
                    break;
                case ":":
                    $state = 4;
                    $end = 1;
                    break;
                case "n":
                    if ( substr($e,$i,4) == "null" ) {
                        $i=$i+4;
                        $state = 3;
                        return NULL;
                    }
                    else break 2; /* exit from switch and while */
                case "t":
                    if ( substr($e,$i,4) == "true") {
                        $state = 3;
                        $i=$i+4;
                        return true;
                    }else break 2; /* exit from switch and while */
                    break;
                case "f":
                    if ( substr($e,$i,4) == "false") {
                        $state = 3;
                        $i=$i+4;
                        return false;
                    }
                    else break 2; /* exit from switch and while */
                    break;    
                case ",":
                    $state = 5;
                    $end = 1;
                    break;
                case " ":
                case "\t":
                case "\r":
                case "\n":
                    break;
                case "+":
                case "-":
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case '.':
                    $state = 3;
                    $start = (int)$i;
                    if ( $e[$i] == "-" || $e[$i] == "+")
                        $i++;
                    for ( ;  $i < strlen($e) && (is_numeric($e[$i]) || $e[$i] == "." || strtolower($e[$i]) == "e") ;$i++){
                        $n = $i+1 < strlen($e) ? $e[$i+1] : "";
                        $a = strtolower($e[$i]);
                        if ( $a == "e" && ($n == "+" || $n == "-"))
                            $i++;
                        else if ( $a == "e") 
                            $this->error=true;
                    }
                    
                    $end = $i;
                    break 2; /* break while too */
                default: 
                    $this->error = true;
                    
            }
            $i++;
        }
        
        return $start == -1 || $end == -1 ? false : substr($e, $start, $end - $start);
    }
    
    /** 
     *    Internal Serializer
     *
     *    @param string $key Variable name
     *    @param mixed $value Value of the variable
     *    @access private
     *    @return string Serialized variable
     */
    function _serialize (  $key = '', &$value ) {
        $r = '';
        if ( $key != '')$r .= "\"${key}\" : ";
        if ( is_numeric($value) ) {
            $r .= ''.$value.'';
        } else if ( is_string($value) ) {
            $r .= '"'.$this->toString($value).'"';
        } else if ( is_object($value) ) {
            $r .= $this->serialize($value);
        } else if ( is_null($value) ) {
            $r .= "null";
        } else if ( is_bool($value) ) {
            $r .= $value ? "true":"false";
        } else if ( is_array($value) ) {
            foreach($value as $k => $v)
                $f[] = $this->_serialize('',$v);
            $r .= "[".implode(",",$f)."]";
            unset($f);
        }
        return $r;
    }
    
    /** 
     *    Convert String variables
     *
     *    @param string $e Variable with an string value
     *    @access private
     *    @return string Serialized variable
     */
    function toString($e) {
        $rep = array("\\","\r","\n","\t","'",'"');
        $val = array("\\\\",'\r','\n','\t','\'','\"');
        $e = str_replace($rep, $val, $e);
        return $e;
    }
}

?>