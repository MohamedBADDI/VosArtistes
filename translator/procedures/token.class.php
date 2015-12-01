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

class SurStudioPluginTranslatorRevolutionLiteTokenManage {
	
	public static function main() {

		try {
			return self::_auth();
		}
		catch(Exception $e) {
			return self::_fail($e);
		}

	}

	protected static function _auth() {

		try {

			$auth = new SurStudioPluginTranslatorRevolutionLiteAuth();

			return self::_gen_response($auth->generate());

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

SurStudioPluginTranslatorRevolutionLiteTokenManage::main();