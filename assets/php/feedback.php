<?php 
$to       = "contact@heartcoreautomation.com";
// $to       = "oliinykruslan@gmail.com";
$tema     = "Heartcore";
$array_def = array(
	'title' => null,
	'email' => null,
	'phone' => null,
	'firstname' => null,
	'lastname' => null,
	'company' => null,
	'current_page' => null,
	'message' => null,
	'radio_group' => null,
);
$array_def = array_replace($array_def,$_POST);
$scip_send = false;
$send_status = false;
$out_m = array();
if(!empty($array_def['email']) && !filter_var($array_def['email'], FILTER_VALIDATE_EMAIL)){
	$out_m['alert_message'] = "Your email is'nt correct!";
	$scip_send = true;
}
$message = "";
if($scip_send === false){
	if(!empty($array_def['title'])){
		$message .= "Title: ".$array_def['title']."\n";
	}
	$message .= "<br>E-mail: ".$array_def['email']."\n";
	if(!empty($array_def['phone'])){
		$message .= "<br>Phone number: ".$array_def['phone']."\n";
	}
	if(!empty($array_def['firstname'])){
		$message .= "<br>First name: ".$array_def['firstname']."\n";
	}
	if(!empty($array_def['lastname'])){
		$message .= "<br>Last name: ".$array_def['lastname']."\n";
	}
	if(!empty($array_def['company'])){
		$message .= "<br>Company: ".$array_def['company']."\n";
	}
	if(!empty($array_def['current_page'])){
		$message .= "<br>From page: ".$array_def['current_page']."\n";
	}
	if(!empty($array_def['message'])){
		$message .= "<br>How can we help you: ".$array_def['message']."\n";
	}
	if(!empty($array_def['radio_group'])){
		$message .= "<br>Currently Use RPA?: ";
		$message .= ($array_def['radio_group'] == 'Yes' || $array_def['radio_group'] == "No") ? $array_def['radio_group'] : 'No' ."\n";
	}
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	if(mail($to, $tema, $message, $headers) ){
		$out_m['alert_message'] = "Thank you. We will reach out to you shortly";
		$send_status = true;
	}else{
		$out_m['alert_message'] = "Something went wrong, go back and try again!";
	}
	$out_m['send_status'] = $send_status;
}
echo json_encode($out_m);
exit();
?>