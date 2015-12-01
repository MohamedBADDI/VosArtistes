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

require_once dirname(__FILE__) . '/../classes/config.class.php';
require_once dirname(__FILE__) . '/../classes/auth.class.php';

SurStudioPluginTranslatorRevolutionLiteCommon::printHeaders();

class SurStudioPluginTranslatorRevolutionLiteTranslateManage {

	protected static $_token;
	protected static $_crc;
	protected static $_text;
	protected static $_from;
	protected static $_to;
	protected static $_ct;
	protected static $_nd;
	
	public static function main() {
		
		self::$_token = SurStudioPluginTranslatorRevolutionLiteCommon::getVariable('tk');
		self::$_crc = SurStudioPluginTranslatorRevolutionLiteCommon::getVariable('cr');
		self::$_from = SurStudioPluginTranslatorRevolutionLiteCommon::getVariable('f');
		self::$_to = SurStudioPluginTranslatorRevolutionLiteCommon::getVariable('t');
		self::$_ct = SurStudioPluginTranslatorRevolutionLiteCommon::getVariable('ct');
		self::$_nd = SurStudioPluginTranslatorRevolutionLiteCommon::getVariable('nd');
		self::$_text = SurStudioPluginTranslatorRevolutionLiteCommon::getVariable('tx');
		
		try {
			$validate = new SurStudioPluginTranslatorRevolutionLiteTranslateValidator(array(
				'token' => self::$_token,
				'crc' => self::$_crc,
				'text' => self::$_text,
				'from' => self::$_from,
				'to' => self::$_to,
				'ct' => self::$_ct,
				'nd' => self::$_nd
			));
		}
		catch(Exception $e) {
			return self::_fail($e);
		}

		try {
			$translate = new SurStudioPluginTranslatorRevolutionLiteTranslateTransport($validate);
			self::_gen_response($translate->generate());
		}
		catch(Exception $e) {
			return self::_fail($e);
		}

	}

	protected static function _fail($_e) {

		return self::_gen_response(array(
			'error' => $_e->getMessage()
		));

	}

	protected static function _gen_response($_array) {

		echo SurStudioPluginTranslatorRevolutionLiteFastJSON::encode($_array);
		
	}

}

SurStudioPluginTranslatorRevolutionLiteTranslateManage::main();