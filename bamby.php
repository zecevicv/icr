<?php 


if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest')
{    

	// ========= BAMBY ==========  //
	$ProjectID = '7889';
	$Password = 'asd250319';

	$fullname 	= htmlentities($_POST['data']['firstname']);
	$Phone      = htmlentities($_POST['data']['phone']);
	$email      = htmlentities($_POST['data']['email']);
	$MediaTitle = !empty($_POST['data']['utm_source']) ? htmlentities($_POST['data']['utm_source']) : 'WEBSITE';
	$Message  = '';
	$AllowedMail=2;

	if(isset($_POST['data']['spam'])&&$_POST['data']['spam']=='on') $AllowedMail=0;
	$IP =$_SERVER['REMOTE_ADDR'];

	$action="http://www.bmby.com/shared/AddClient/index.php" ;
	$post_array = array(
	    'Fname'=> $fullname,
	    'Phone'=>$Phone,
	    'Email'=>$email,
	    'MediaTitle'=>$MediaTitle,
	    'IP'=>$IP,
	    'ProjectID'=>$ProjectID,
	    'Message'=>$Message,
	    'Password'=>$Password,
	    'AllowedMail'=>$AllowedMail
	);
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $action );
	curl_setopt($ch, CURLOPT_POST, TRUE);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $post_array);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	$response = curl_exec($ch );
	curl_close($ch );
	// ========= BAMBY ==========  //

	$result = 'success';

	echo json_encode(['result'=>$result]);

  // exit;    
}



?>