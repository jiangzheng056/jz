<!--
 * @Author: Jz 530467341@qq.com
 * @Date: 2023-07-10 10:58:54
 * @LastEditors: Jz 530467341@qq.com
 * @LastEditTime: 2023-07-10 11:00:45
 * @FilePath: \some\app\src\views\causesDetails.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="sidebar">
            <div class="sidebar-scroll">
                <div class="cross">
                    <i class="bi bi-plus-lg"></i>
                </div>
                <div class="logo">
                    <a href="index.html"><img src="../assets/img/logo-style-2.png" alt=""></a>
                </div>
                <p>A charitable organization or charity is an organization whose primary objectives are philanthropy &
                    social well-being. The legal definition of a charitable organization varies between countries and in
                    some instances regions of the country.</p>
                <div class="instagram">
                    <h3>Instagram Post</h3>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-1.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-1.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-2.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-2.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-3.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-3.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-4.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-4.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-5.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-5.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                    <div class="insta-thumb">
                        <a href="#"><img src="../assets/img/gallery/gallery-6.jpg" alt=""></a>
                        <div class="insta-inner">
                            <a class="image-popup" href="../assets/img/gallery/gallery-6.jpg"><i
                                    class="bi bi-search"></i></a>
                        </div>
                    </div>
                </div>
                <div class="our-community">
                    <h3>Join Our Community</h3>
                    <ul class="social-community">
                        <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://pinterest.com/"><i class="fab fa-pinterest"></i></a></li>
                        <li><a href="https://instagram.com/"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div class="copy-right">
                    <span>Copyright 2022 <b>Diviner</b> | Design By <a
                            href="http://www.bootstrapmb.com/">bootstrapmb</a></span>
                </div>
            </div>
        </div>
        <div class="header-search">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="search-box">
                            <form action="#" method="post">
                                <label>What are you looking for ?</label>
                                <input type="text" placeholder="Anything need search here ...">
                            </form>
                            <div class="search-cross-btn">
                                <i class="bi bi-x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <header class="header-area style-1">
            <div class="main-menu">
                <div class="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                    <div class="mobile-logo-wrap ">
                        <a href="index.html"><img src="../assets/img/logo-style-2.png" alt=""></a>
                    </div>
                    <div class="menu-close-btn">
                        <i class="bi bi-x-lg"></i>
                    </div>
                </div>
                <ul class="menu-list">
                    <li class="menu-item-has-children">
                        <a href="#" class="drop-down">Home</a><i class='bi bi-plus dropdown-icon'></i>
                        <ul class="submenu">
                            <li><a href="index.html">Home 1</a></li>
                            <li><a href="index2.html">Home 2</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#" class="drop-down">Campaigns</a><i class='bi bi-plus dropdown-icon'></i>
                        <ul class="submenu">
                            <li><a href="project.html">Project</a></li>
                            <li><a href="project-details.html">Project Details</a></li>
                            <li><a href="causes.html">Causes</a></li>
                            <li><a href="causes-details.html">Causes Details</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Blog</a><i class='bi bi-plus dropdown-icon'></i>
                        <ul class="submenu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#" class="drop-down">Pages</a><i class='bi bi-plus dropdown-icon'></i>
                        <ul class="submenu">
                            <li><a href="event.html">Event</a></li>
                            <li><a href="event-details.html">Event Details</a></li>
                            <li><a href="member.html">Member</a></li>
                            <li><a href="member-details.html">Member Details</a></li>
                            <li><a href="team.html">Join our Team</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="faq.html">FAQs</a></li>
                            <li><a href="error.html">Error</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="d-lg-none d-block">
                    <form class="mobile-menu-form">
                        <div class="input-with-btn d-flex flex-column">
                            <input type="text" placeholder="Search here...">
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <div class="hotline two">
                        <div class="hotline-info">
                            <span>Click To Call</span>
                            <h6><a href="tel:347-274-8816">+347-274-8816</a></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-logo">
                <a href="index.html"><img src="../assets/img/header-logo.png" alt=""></a>
            </div>
            <div class="nav-right d-flex align-items-center">
                <div class="search-btn">
                    <i class="bi bi-search"></i>
                </div>
                <div class="side-menu">
                    <a href="javascript:void(0)" class="side-btn">
                        <span class="cross-top"></span>
                        <span class="cross-middle"></span>
                        <span class="cross-bottom"></span>
                    </a>
                </div>
                <div class="hotline d-xxl-flex d-none">
                    <div class="hotline-icon">
                        <img src="../assets/img/icons/header-phone.svg" alt="">
                    </div>
                    <div class="hotline-info">
                        <span>Click To Call</span>
                        <h6><a href="tel:347-274-8816">+347-274-8816</a></h6>
                    </div>
                </div>
                <div class="eg-btn btn--primary header-btn">
                    <a class="d-flex align-items-center" href="login.html">Donate Now <img
                            src="../assets/img/icons/donate.svg" alt="download"></a>
                </div>
                <div class="mobile-menu-btn d-lg-none d-block">
                    <span>MENU</span>
                </div>
            </div>
        </header>
        <section class="breadcrumbs">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-wrapper">
                            <h1>Causes Details</h1>
                            <span><a href="index.html">Home</a><i class="bi bi-chevron-right"></i>Causes Details</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="causes-details sec-mar-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 or2">
                        <div class="cause-details-left">
                            <span>Education</span>
                            <h2>Mountain Campaign For African Children’s Education.</h2>
                            <div class="cause-thumbnail">
                                <img src="../assets/img/causes/cause-thumb-single.jpg" alt="">
                            </div>
                            <div class="found-goal">
                                <div class="single-goal">
                                    <h6>$50,00.00</h6>
                                    <span>Funding Goal</span>
                                </div>
                                <div class="single-goal">
                                    <h6>$20,00.00</h6>
                                    <span>Funds Raised</span>
                                </div>
                                <div class="single-goal">
                                    <h6>520</h6>
                                    <span>Days to go</span>
                                </div>
                                <div class="single-goal">
                                    <a href="#">DONATE</a>
                                </div>
                            </div>
                            <div class="cause-left-inner">
                                <h3>Our Cause Story</h3>
                                <p>In hac habitasse platea dictumst. Integer a vulputate diam. Duis vitae efficitur velit.
                                    Pellentesque id risus massa. Integer iaculis consequat mauris, quis volutpat dolor
                                    tristique vitae. Nullam ligula leo, sodales vel facilisis vel, hendrerit pretium tortor.
                                    Integer a efficitur ligula. Vestibulum ultricies malesuada augue, eu cursus justo
                                    placerat vel. Vivamus eleifend metus ac tellus euismod maximus. Integer fringilla eros
                                    erat, quis blandit dolor venenatis sed. Maecenas quis erat gravida, egestas urna id,
                                    pellentesque dui. Fusce placerat neque vitae erat aliquet gravida.</p>
                                <b>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit
                                    anim id est laborum</b>
                                <p>Gochujang ugh viral, butcher pabst put a bird on it meditation austin craft beer banh mi.
                                    Distillery ramps af, goch ujang hell of VHS kitsch austin. Vegan air plant trust fund,
                                    poke sartorial ennui next lev el photo booth coloring book etsy green juice meditation
                                    austin craft beer.</p>
                                <div class="cause-share">
                                    <span>Share Your Timeline :</span>
                                    <ul class="share-social">
                                        <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://pinterest.com/"><i class="fab fa-pinterest"></i></a></li>
                                        <li><a href="https://instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="post-comments">
                                <h4>Comments (03)</h4>
                                <div class="comment">
                                    <div class="single-comment">
                                        <div class="comment-author">
                                            <div class="author-thumb">
                                                <img src="../assets/img/commentor-1.jpg" alt="">
                                            </div>
                                            <div class="author-info">
                                                <h6>Sata Waston - <span>April 6, 2022 at 3:54 am</span></h6>
                                            </div>
                                            <div class="reply">
                                                <a href="causes-details.html"><i class="bi bi-reply"></i></a>
                                            </div>
                                        </div>
                                        <p>Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum
                                            venenati leo et dic tum finibus. Nulla vulputate dolor sit amet tristique
                                            dapibus.Gochujang ugh viral, butcher pabst put a bird on it meditation austin.
                                        </p>
                                    </div>
                                    <div class="single-comment">
                                        <div class="comment-author">
                                            <div class="author-thumb">
                                                <img src="../assets/img/commentor-2.jpg" alt="">
                                            </div>
                                            <div class="author-info">
                                                <h6>Robart Fox - <span>March 6, 2022 at 3:54 am</span></h6>
                                            </div>
                                            <div class="reply">
                                                <a href="causes-details.html"><i class="bi bi-reply"></i></a>
                                            </div>
                                        </div>
                                        <p>Rhoncus ut tortor in, pretium tempus neque. Vestibulum venenati leo et dic tum
                                            finibus. Nulla vulputate dolor sit amet tristique dapibus.Gochujang ugh viral,
                                            butcher pabst put a bird on it meditation austin.</p>
                                    </div>
                                </div>
                                <div class="comment">
                                    <div class="single-comment">
                                        <div class="comment-author">
                                            <div class="author-thumb">
                                                <img src="../assets/img/commentor-3.jpg" alt="">
                                            </div>
                                            <div class="author-info">
                                                <h6>Jme Waston - <span>January 6, 2022 at 3:54 am</span></h6>
                                            </div>
                                            <div class="reply">
                                                <a href="causes-details.html"><i class="bi bi-reply"></i></a>
                                            </div>
                                        </div>
                                        <p>Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum
                                            venenati leo et dic tum finibus. Nulla vulputate dolor sit amet tristique
                                            dapibus.Gochujang ugh viral, butcher pabst put a bird on it meditation austin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="leave-review">
                                <h2>Leave A Review</h2>
                                <div class="review-form">
                                    <div class="review-star">
                                        <span>Your Rating :</span>
                                        <ul class="star-review">
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                        </ul>
                                    </div>
                                    <form action="#" method="post">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" name="name" placeholder="Your Name :">
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" name="email" placeholder="Your Email :">
                                            </div>
                                            <div class="col-12">
                                                <textarea name="message" cols="30" rows="10"
                                                    placeholder="Write Message :"></textarea>
                                                <input type="submit" value="Send Now">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 or1">
                        <div class="sidebar-widget">
                            <div class="widget-search">
                                <form action="#" method="post">
                                    <input type="text" name="search" placeholder="Search Here">
                                    <button type="submit"><i class="bi bi-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="sidebar-widget">
                            <h4>Recent Post</h4>
                            <div class="recent-post">
                                <div class="recent-thumb">
                                    <a href="causes-details.html"><img src="../assets/img/causes/cause-recent-1.jpg"
                                            alt=""></a>
                                </div>
                                <div class="recent-post-cnt">
                                    <span>January 31, 2022</span>
                                    <h5><a href="causes-details.html">Grant Distributions Conti nu to Incr Ease.</a></h5>
                                </div>
                            </div>
                            <div class="recent-post">
                                <div class="recent-thumb">
                                    <a href="causes-details.html"><img src="../assets/img/causes/cause-recent-2.jpg"
                                            alt=""></a>
                                </div>
                                <div class="recent-post-cnt">
                                    <span>February 31, 2022</span>
                                    <h5><a href="causes-details.html">Seminar for Children to Learn About.</a></h5>
                                </div>
                            </div>
                            <div class="recent-post">
                                <div class="recent-thumb">
                                    <a href="causes-details.html"><img src="../assets/img/causes/cause-recent-3.jpg"
                                            alt=""></a>
                                </div>
                                <div class="recent-post-cnt">
                                    <span>March 31, 2022</span>
                                    <h5><a href="causes-details.html">Education and teacher for all African Children.</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="single-cause">
                            <div class="cause-thumbnail">
                                <a href="causes-details.html"><img src="../assets/img/causes/cause-thumb-8.png" alt=""></a>
                                <div class="cause-tag">
                                    <a href="project.html">Home Less</a>
                                </div>
                            </div>
                            <div class="cause-wrap">
                                <div class="cause-cnt">
                                    <h4><a href="causes-details.html">The food industry needs to act now to cut
                                            greenhouse.</a></h4>
                                    <div class="donate-bar">
                                        <span>Raised</span>
                                        <div class="donate">
                                            <div class="donate-done" data-done="70"></div>
                                            <span>70%</span>
                                        </div>
                                    </div>
                                    <div class="amaunt d-flex justify-content-between">
                                        <p><strong>Achieved:</strong> $3,900.00</p>
                                        <p><strong>Target:</strong> $3500.00</p>
                                    </div>
                                </div>
                                <div class="view-btn">
                                    <a href="causes-details.html">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="join-now sec-mar">
            <div class="container">
                <div class="newsletter">
                    <div class="row align-items-center">
                        <div class="col-md-9">
                            <div class="newsletter-cnt wow animate fadeInUp" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <h2>Your donation today can help us root out cyclical poverty.</h2>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="joinnow-btn">
                                <a href="team.html">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="footer-top">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <a href="index.html"><img src="../assets/img/header-logo.png" alt=""></a>
                                </div>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam.</p>
                                <div class="social-media">
                                    <ul class="footer-social">
                                        <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://pinterest.com/"><i class="fab fa-pinterest"></i></a></li>
                                        <li><a href="https://instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-3 d-flex justify-content-md-center justify-content-start">
                            <div class="footer-widget">
                                <h4>Explore On</h4>
                                <ul class="footer-menu">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="causes.html">Our Causes</a></li>
                                    <li><a href="team.html">Team Member</a></li>
                                    <li><a href="blog.html">Blog & News</a></li>
                                    <li><a href="event.html">Our Event</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-3 d-flex justify-content-md-center justify-content-start">
                            <div class="footer-widget">
                                <h4>Our Causes</h4>
                                <ul class="footer-menu">
                                    <li><a href="causes.html">Clean Water</a></li>
                                    <li><a href="causes.html">Medicine</a></li>
                                    <li><a href="causes.html">Blood Donation</a></li>
                                    <li><a href="causes.html">Organic Food</a></li>
                                    <li><a href="causes.html">Child Education</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div class="footer-widget">
                                <h4>Get The Updates</h4>
                                <p>Sign up to receive the best offers on promotion and coupons.</p>
                                <div class="subscribe">
                                    <form action="#" method="post">
                                        <input type="email" name="email" placeholder="Type your Email :">
                                        <input type="submit" value="Send Now">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-middle">
                <div class="container">
                    <div class="row gy-5 align-items-center">
                        <div class="col-md-12 col-lg-4 col-xl-6">
                            <div class="footer-widget">
                                <div class="contact-info">
                                    <h4>Contact Us :</h4>
                                    <div class="info">
                                        <div class="icon">
                                            <i><img src="../assets/img/icons/location.svg" alt=""></i>
                                        </div>
                                        <p>House#168/170, Road#02, Ave#01, Mirpur DOHS, Dhaka</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div class="footer-widget">
                                <div class="info">
                                    <div class="icon">
                                        <i><img src="../assets/img/icons/phone-white.svg" alt=""></i>
                                    </div>
                                    <div class="phone">
                                        <a href="tel:01760000032">+880 176 0000 032</a>
                                        <a href="tel:09256806649">+092568 06649</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div class="footer-widget">
                                <div class="info">
                                    <div class="icon">
                                        <i><img src="../assets/img/icons/envelope.svg" alt=""></i>
                                    </div>
                                    <div class="email">
                                        <a href="/cdn-cgi/l/email-protection#d6bfb8b0b996b3aeb7bba6bab3f8b5b9bb"><span
                                                class="__cf_email__"
                                                data-cfemail="cfa6a1a9a08faab7aea2bfa3aae1aca0a2">[email&#160;protected]</span></a>
                                        <a href="/cdn-cgi/l/email-protection#91e2e4e1e1fee3e5d1d3f4e8fff5bff2fefc"><span
                                                class="__cf_email__"
                                                data-cfemail="077472777768757347627f666a776b622964686a">[email&#160;protected]</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 col-lg-4 col-xl-5">
                            <div class="copy-txt">
                                <span>Copyright 2022 <b>Diviner</b> | Design By <a
                                        href="http://www.bootstrapmb.com/">bootstrapmb</a></span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8 col-xl-7">
                            <ul class="footer-bottom-menu">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/css/style.css';
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/bootstrap-icons.css';
@import '../assets/css/all.min.css';
@import '../assets/css/fontawesome.min.css';
@import '../assets/css/swiper-bundle.min.css';
@import '../assets/css/jQuery-plugin-progressbar.css';
@import '../assets/css/magnific-popup.css';
@import '../assets/css/animate.css';
@import '../assets/css/style.css';
</style>