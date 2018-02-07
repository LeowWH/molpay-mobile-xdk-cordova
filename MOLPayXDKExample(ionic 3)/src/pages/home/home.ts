import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var molpay;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  startedMolpay : any;
  constructor(public navCtrl: NavController, public platform: Platform) {
    
  }
  closeMolpay(){
    molpay.closeMolpay();
  }

  pay() {
    this.startedMolpay = true;
    this.platform.ready().then((readySource) => {
      if(readySource === "cordova"){
    // MOLPay payment details
    var paymentDetails = {
      // ------- SDK required data ----------
      'mp_amount': '1.10',
      'mp_username': '',
      'mp_password': '',
      'mp_merchant_ID': '',
      'mp_app_name': '',
      'mp_order_ID': 'M0001',
      'mp_currency': 'MYR',
      'mp_country': 'MY',
      'mp_verification_key': '',
      'mp_channel': '',
      'mp_bill_description': 'Test MOLPay',
      'mp_bill_name': 'molpay',
      'mp_bill_email': 'email@email.com',
      'mp_bill_mobile': ''
      // 'mp_channel_editing' : false,
      // 'mp_editing_enabled' : false,
      // 'mp_transaction_id' : '', // Optional, required when mp_request_type is 'Status'
      // 'mp_preferred_token' : '', // Optional, set the token id to nominate a preferred token as the default selection
      // 'mp_request_type' : '', // Optional, set 'Status' when performing a transactionRequest
      // 'mp_bin_lock' : ['414170', '414171'], // Optional for credit card BIN restrictions
      // 'mp_bin_lock_err_msg' : 'Only UOB allowed', // Optional for credit card BIN restrictions
      // 'mp_is_escrow' : '', // Optional for Escrow, put "1" to enable escrow
      // 'mp_filter' : '0', // Optional for debit card only transactions
      // 'mp_custom_css_url' : cordova.file.applicationDirectory + 'www/custom.css', // Optional for custom UI
      // 'mp_is_recurring' : false, // Optional, set true to process this transaction through the recurring api, please refer the MOLPay Recurring API pdf  
      // 'mp_allowed_channels': ['credit', 'credit3'], // Optional for channels restriction
      // 'mp_sandbox_mode': true, // Optional for sandboxed development environment, set boolean value to enable.
      // 'mp_express_mode': true, // Optional, required a valid mp_channel value, this will skip the payment info page and go direct to the payment screen.
      // 'mp_advanced_email_validation_enabled': true, // Optional, enable this for extended email format validation based on W3C standards.
      // 'mp_advanced_phone_validation_enabled': true, // Optional, enable this for extended phone format validation based on Google i18n standards.
      // 'mp_bill_name_edit_disabled': true, // Optional, explicitly force disable billing name edit.
      // 'mp_bill_email_edit_disabled': true, // Optional, explicitly force disable billing email edit.
      // 'mp_bill_mobile_edit_disabled': true, // Optional, explicitly force disable billing mobile edit.
      // 'mp_bill_description_edit_disabled': true, // Optional, explicitly force disable billing description edit.
      // 'mp_language': 'EN', // Optional, EN, MS, VI, TH, FIL, MY, KM, ID, ZH.
      // 'mp_dev_mode': false // Optional, enable for online sandbox testing.
    };
    var callback = function(response){
      console.log(response);
      alert(response);
    }

    molpay.startMolpay(paymentDetails, callback);
      }
    });
  }

}
