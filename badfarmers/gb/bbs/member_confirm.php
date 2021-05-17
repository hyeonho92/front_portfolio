<?php
include_once('./_common.php');

if ($is_guest)
    alert('로그인 한 회원만 접근하실 수 있습니다.', G5_BBS_URL.'/login.php');

/*
if ($url)
    $urlencode = urlencode($url);
else
    $urlencode = urlencode($_SERVER[REQUEST_URI]);
*/

$g5['title'] = '회원 비밀번호 확인';
//include_once('./_head.sub.php');
include_once($_SERVER[DOCUMENT_ROOT].'/gb/head.html'); 
include_once($_SERVER[DOCUMENT_ROOT].'/gb/head.sub.php'); 
$url = clean_xss_tags($_GET['url']);

// url 체크
check_url_host($url);

$url = get_text($url);

include_once($member_skin_path.'/member_confirm.skin.php');

//include_once('./_tail.sub.php');
include_once($_SERVER[DOCUMENT_ROOT].'/gb/tail.sub.php');
include_once($_SERVER[DOCUMENT_ROOT].'/gb/member_footer.html');
?>
