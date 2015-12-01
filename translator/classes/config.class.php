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
 
class SurStudioPluginTranslatorRevolutionLiteConfig {
	
	/**
	 * Translation Service
	 * 
	 * @string SurStudio|Microsoft|Google
	 */
	const TRANSLATION_SERVICE = 'SurStudio';
	
	/**
	 * API key. Refer to /help/api_key.html
	 */
	const API_KEY = 'a5eb13627c86502f4be843c24a977d54f9def925bba58fde1829a97b';

	/**
	 * API key pair for the Microsoft Translation Service. Refer to https://datamarket.azure.com/dataset/1899a118-d202-492c-aa16-ba21c33c06cb and https://datamarket.azure.com/developer/applications/
	 */
	const MICROSOFT_CLIENT_ID = '';
	const MICROSOFT_CLIENT_SECRET = '';

	/**
	 * API key for the Google Translation Service. Refer to https://code.google.com/apis/console
	 */
	const GOOGLE_API_KEY = '';
	
	/**
	 * Set whether to verify if the cache files are writable, or not
	 */	
	const VERIFY_CACHE_WRITABLE = true;

	public static function getApiKey() {
	
		return self::API_KEY;
		
	}	

	public static function verifyCacheWritable() {
	
		return self::VERIFY_CACHE_WRITABLE;
		
	}	

	public static function getTranslationService() {
		
		switch(self::TRANSLATION_SERVICE) {
			case 'SurStudio':
				$result = 'ss';
				break;
			case 'Microsoft':
				$result = 'ma';
				break;
			case 'Google':
				$result = 'gt';
				break;
			default:
				$result = 'ss';
				break;				
		}
		
		return $result;
		
	}

	public static function getTranslationServiceApiKey() {
		
		switch(self::TRANSLATION_SERVICE) {
			case 'Microsoft':
				$result = self::MICROSOFT_CLIENT_ID;
				break;
			case 'Google':
				$result = self::GOOGLE_API_KEY;
				break;
			default:
				$result = '';
				break;				
		}
		
		return $result;
		
	}

	public static function getTranslationService2ndApiKey() {
		
		switch(self::TRANSLATION_SERVICE) {
			case 'Microsoft':
				$result = self::MICROSOFT_CLIENT_SECRET;
				break;
			default:
				$result = '';
				break;				
		}
		
		return $result;
		
	}

}

?>