
<template>
  <div>
    <main class="fix">

        <section class="banner__area banner__bg" :style="{ backgroundImage: `url(${bannerBg})` }">
            <div class="container">
                <div class="row flex-row-reverse align-items-center justify-content-center">
                    <div class="banner__content col-xl-5 col-lg-6">
                        <!-- <div class="banner__content"> -->
                            <h2 class="title" data-aos="fade-up" data-aos-delay="200"><img
                                src="../assets/img/banner/banner_title_img01.png" alt="">حیوانات خانگی  <br>مرکز مراقبت و دامپزشکی
                                <span class="icon"><img src="../assets/img/banner/banner_title_img02.png" alt=""></span>

                            </h2>
                            <p data-aos="fade-up" data-aos-delay="400">ما با ارائه بهترین محصولات و خدمات، سلامتی و شادی
                                حیوانات خانگی شما را تضمین می کنیم.</p>
                            <router-link to="/about" class="btn hover-effect" data-aos="fade-up" data-aos-delay="600"><img src="../assets/img/icon/right_arrow.svg" alt=""
                                class="injectable rotate-180">بیشتر
                                </router-link>
                        <!-- </div> -->
                    </div>
                    <div class="col-xl-7 col-lg-6 col-md-9">
                        <div class="banner__img text-start">
                            <img src="../assets/img/banner/banner_img01.png" alt="img" data-aos="fade-left"
                                data-aos-delay="800">



                            <div class="healthy-pets aos-init aos-animate" data-aos="zoom-in" data-aos-delay="1000">
                                <div class="icon">
                                    <img src="../assets/img/icon/pet_icon01.svg" alt="" class="injectable">
                                </div>
                                <div class="content">
                                    <h6 class="circle rotateme"><span style="transform: rotate(0deg);">B</span><span style="transform: rotate(14.5deg);">E</span><span style="transform: rotate(29deg);">T</span><span style="transform: rotate(43.5deg);">T</span><span style="transform: rotate(58deg);">E</span><span style="transform: rotate(72.5deg);">R</span> <span style="transform: rotate(87deg);">-</span> <span style="transform: rotate(101.5deg);">H</span><span style="transform: rotate(116deg);">E</span><span style="transform: rotate(130.5deg);">A</span><span style="transform: rotate(145deg);">L</span><span style="transform: rotate(159.5deg);">T</span><span style="transform: rotate(174deg);">H</span><span style="transform: rotate(188.5deg);">Y</span> <span style="transform: rotate(203deg);">-</span> <span style="transform: rotate(217.5deg);">P</span><span style="transform: rotate(232deg);">E</span><span style="transform: rotate(246.5deg);">T</span><span style="transform: rotate(261deg);">S</span> <span style="transform: rotate(275.5deg);">-</span> <span style="transform: rotate(290deg);">L</span><span style="transform: rotate(304.5deg);">O</span><span style="transform: rotate(319deg);">V</span><span style="transform: rotate(333.5deg);">E</span> <span style="transform: rotate(348deg);">-</span></h6>
                                </div>
                            </div>

<!-- <div class="healthy-pets" data-aos="zoom-in" data-aos-delay="1000">
  <div class="icon">
    <img src="../assets/img/icon/pet_icon01.svg" alt="" class="injectable">
  </div>

  <div class="content">
    <div class="circle-text rotateme" aria-label="BETTER HEALTHY PETS LOVE">
      <span style="--i:0">B</span>
      <span style="--i:1">E</span>
      <span style="--i:2">T</span>
      <span style="--i:3">T</span>
      <span style="--i:4">E</span>
      <span style="--i:5">R</span>
      <span style="--i:6">&nbsp;</span>
      <span style="--i:7">-</span>
      <span style="--i:8">&nbsp;</span>
      <span style="--i:9">H</span>
      <span style="--i:10">E</span>
      <span style="--i:11">A</span>
      <span style="--i:12">L</span>
      <span style="--i:13">T</span>
      <span style="--i:14">H</span>
      <span style="--i:15">Y</span>
      <span style="--i:16">&nbsp;</span>
      <span style="--i:17">-</span>
      <span style="--i:18">&nbsp;</span>
      <span style="--i:19">P</span>
      <span style="--i:20">E</span>
      <span style="--i:21">T</span>
      <span style="--i:22">S</span>
      <span style="--i:23">&nbsp;</span>
      <span style="--i:24">-</span>
      <span style="--i:25">&nbsp;</span>
      <span style="--i:26">L</span>
      <span style="--i:27">O</span>
      <span style="--i:28">V</span>
      <span style="--i:29">E</span>
      <span style="--i:30">&nbsp;</span>
      <span style="--i:31">-</span>
    </div>
  </div>
</div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner__shape-wrap">
                <img src="../assets/img/banner/banner_shape01.png" alt="img" data-aos="fade-down" data-aos-delay="1200">
                <img src="../assets/img/banner/banner_shape02.png" alt="img" data-aos="fade-up-right"
                    data-aos-delay="1200">
                <img src="../assets/img/banner/banner_shape03.png" alt="img" class="ribbonRotate">
                <img src="../assets/img/banner/banner_shape04.png" alt="img">
            </div>
        </section>

        <section class="about__area">
            <div class="container">
                <div class="row flex-row-reverse align-items-center justify-content-center">
                    <div class="col-xl-5 col-lg-6 col-md-8">
                        <div class="about__img">
                            <img src="../assets/img/images/about_img.png" alt="">
                            <div class="video__box">
                                <div class="video__box-shape">
                                    <img src="../assets/img/images/about_video_shape.svg" alt="" class="injectable">
                                </div>
                                <h5 class="title">دیگر ویدیوهای <br> مارا تماشا کنید</h5>
                                <a href="https://www.youtube.com/watch?v=XdFfCPK5ycw" class="popup-video play-btn">
                                <i class="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6">
                        <div class="about__content">
                            <div class="section__title mb-20">
                                <span class="sub-title">ما را بیشتر بشناسید
                                    <strong class="shake">
                                        <img src="../assets/img/icon/pet_icon02.svg" alt="" class="injectable">
                                    </strong>
                                </span>
                                <h2 class="title">هدف ما مراقبت و سلامت <br> حیوانات خانگی شماست</h2>
                            </div>
                            <div class="about__content-inner rtl">
                                <div class="experience__box">
                                    
                                    <div class="experience__box-content">
                                        <h4 class="title"> 15 <span>سال</span></h4>
                                        <p>تجربه</p>
                                    </div>
                                    <div class="experience__box-shape">
                                        <img src="../assets/img/images/experience_shape.svg" alt="" class="injectable">
                                    </div>
                                </div>
                                <p>پت شاپ ما با ارائه محصولات باکیفیت،

                                    خدمات حرفه‌ای و قیمت‌های مناسب،

                                    سلامتی و شادی حیوانات خانگی شما را تضمین می‌کند.</p>
                            </div>
                            <p class="mt-5">ما با شما همکاری می‌کنیم تا برنامه‌های مراقبتی شخصی‌سازی‌شده، از جمله مدیریت بیماری‌های
                                مزمن، طراحی کنیم.

                                تعهد ما این است که شبکه‌ای برتر از خدمات بهداشتی در منطقه ارائه دهیم،

                                با تمرکز بر مراقبت بیمارمحور که الهام‌بخش و اثرگذار باشد.</p>
                            <div class="about__content-bottom flex-row-reverse">
                                <div class="about__content-sign">
                                    <img src="../assets/img/images/author_sign.png" alt="">
                                </div>
                                <div class="customer__review flex-row-reverse">
                                    <div class="customer__review-img">
                                        <ul class="list-wrap">
                                            <li><img src="../assets/img/images/author_01.png" alt=""></li>
                                            <li><img src="../assets/img/images/author_02.png" alt=""></li>
                                            <li><img src="../assets/img/images/author_03.png" alt=""></li>
                                            <li><img src="../assets/img/images/author_04.png" alt=""></li>
                                        </ul>
                                    </div>
                                    <div class="customer__review-content">
                                        <div class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <span>4.7 (بازدید1,567)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="shape">
                                <img src="../assets/img/images/about_shape02.png" alt="img" data-aos="fade-down-left"
                                    data-aos-delay="400">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about__shape-wrap">
                <img src="../assets/img/images/about_shape01.png" alt="img" data-aos="fade-up-right" data-aos-delay="800">
                <img src="../assets/img/images/about_shape03.png" alt="img" class="ribbonRotate">
            </div>
        </section>

        <div class="marquee__area">
            <div class="marquee__wrap">
                <div class="marquee__box">
                    <router-link to="/error">رزرو نوبت آنلاین <img src="../assets/img/images/marquee_icon.svg" alt=""></router-link>
                    <router-link to="/error">رزرو نوبت آنلاین <img src="../assets/img/images/marquee_icon.svg" alt=""></router-link>
                    <router-link to="/error">رزرو نوبت آنلاین <img src="../assets/img/images/marquee_icon.svg" alt=""></router-link>
                    <router-link to="/error">رزرو نوبت آنلاین <img src="../assets/img/images/marquee_icon.svg" alt=""></router-link>
                </div>
                <div class="marquee__box">
                    <router-link to="/error">رزرو نوبت آنلاین <img src="../assets/img/images/marquee_icon.svg" alt=""></router-link>
                    <router-link to="/error">رزرو نوبت آنلاین <img src="../assets/img/images/marquee_icon.svg" alt=""></router-link>
                    <router-link to="/error">رزرو نوبت آنلاین <img src="../assets/img/images/marquee_icon.svg" alt=""></router-link>
                    <router-link to="/error">رزرو نوبت آنلاین <img src="../assets/img/images/marquee_icon.svg" alt=""></router-link>
                </div>
            </div>
        </div>

        <section class="services__area">
            <div class="container">
                <div class="row flex-row-reverse align-items-center">
                    <div class="col-xl-6 col-lg-7">
                        <div class="section__title mb-40">
                            <span class="sub-title">ارائه مراقبت های خانگی در سطح جهانی
                                <strong class="shake">
                                    <img src="../assets/img/icon/pet_icon02.svg" alt="" class="injectable">
                                </strong>
                            </span>
                            <h2 class="title">ارائه بهترین خدمات مراقبت از حیوانات خانگی و خدمات دامپزشکی</h2>
                        </div>
                    </div>
                    <!-- <div class="col-xl-6 col-lg-5">
                        <div class="view__all-btn text-start mb-40 h-text">
                            <a href="animal-details.html" class="btn border-btn">
                                <img src="../assets/img/icon/right_arrow.svg" alt=""
                                    class="injectable rotate-180">همه خدمات را ببینید 
                             </a>
                        </div>
                    </div> -->
                </div>
                <div class="row flex-row-reverse justify-content-center">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div class="services__item">
                            <div class="services__shape">
                                <div class="shape-one">
                                    <img src="../assets/img/images/services_shape01.svg" alt="" class="injectable">
                                </div>
                                <div class="shape-two">
                                    <img src="../assets/img/images/services_shape02.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="services__icon">
                                <i class="flaticon-vaccine"></i>
                                <div class="services__icon-shape">
                                    <img src="../assets/img/images/services_icon_shape.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="services__content mt-60">
                                <h4 class="title"><router-link to="/error">واکسیناسیون حیوانات خانگی</router-link></h4>
                                <p>ما با شما کار خواهیم کرد تا برنامه های مراقبت فردی از ویژه ای تدارک ببینیم</p>
                                <!-- <a href="animal-details.html" class="btn border-btn"><img
                                    src="../assets/img/icon/right_arrow02.svg" alt=""
                                    class="injectable rotate-180">دیدن جزئیات </a> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div class="services__item">
                            <div class="services__shape">
                                <div class="shape-one">
                                    <img src="../assets/img/images/services_shape01.svg" alt="" class="injectable">
                                </div>
                                <div class="shape-two">
                                    <img src="../assets/img/images/services_shape02.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="services__icon">
                                <i class="flaticon-beauty-saloon"></i>
                                <div class="services__icon-shape">
                                    <img src="../assets/img/images/services_icon_shape.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="services__content mt-60">
                                <h4 class="title"><router-link to="/error">نظافت <br>حیوانات خانگی</router-link></h4>
                                <p>ما با شما کار خواهیم کرد تا برنامه های مراقبت فردی از ویژه ای تدارک ببینیم</p>
                                <!-- <a href="animal-details.html" class="btn border-btn"><img
                                    src="../assets/img/icon/right_arrow02.svg" alt=""
                                    class="injectable rotate-180">دیدن جزئیات </a> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div class="services__item">
                            <div class="services__shape">
                                <div class="shape-one">
                                    <img src="../assets/img/images/services_shape01.svg" alt="" class="injectable">
                                </div>
                                <div class="shape-two">
                                    <img src="../assets/img/images/services_shape02.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="services__icon">
                                <i class="flaticon-vet"></i>
                                <div class="services__icon-shape">
                                    <img src="../assets/img/images/services_icon_shape.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="services__content mt-60">
                                <h4 class="title"><router-link to="/error">دامپزشکی حیوانات خانگی</router-link></h4>
                                <p>ما با شما کار خواهیم کرد تا برنامه های مراقبت فردی از ویژه ای تدارک ببینیم</p>
                                <!-- <a href="animal-details.html" class="btn border-btn"><img
                                    src="../assets/img/icon/right_arrow02.svg" alt=""
                                    class="injectable rotate-180">دیدن جزئیات </a> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div class="services__item">
                            <div class="services__shape">
                                <div class="shape-one">
                                    <img src="../assets/img/images/services_shape01.svg" alt="" class="injectable">
                                </div>
                                <div class="shape-two">
                                    <img src="../assets/img/images/services_shape02.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="services__icon">
                                <i class="flaticon-spay"></i>
                                <div class="services__icon-shape">
                                    <img src="../assets/img/images/services_icon_shape.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="services__content mt-60">
                                <h4 class="title"><router-link to="/error">جراحی <br> حیوانات خانگی</router-link></h4>
                                <p>ما با شما کار خواهیم کرد تا برنامه های مراقبت فردی از ویژه ای تدارک ببینیم</p>
                                <!-- <a href="animal-details.html" class="btn border-btn"><img
                                    src="../assets/img/icon/right_arrow02.svg" alt=""
                                    class="injectable rotate-180">دیدن جزئیات </a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="services__shape-wrap">
                <img src="../assets/img/images/services_shape01.png" alt="img" class="ribbonRotate">
                <img src="../assets/img/images/services_shape02.png" alt="img" data-aos="fade-up-right"
                    data-aos-delay="800">
                <img src="../assets/img/images/services_shape03.png" alt="img" data-aos="fade-down-left"
                    data-aos-delay="400">
            </div>
        </section>

        <section class="why__we-are-area">
            <div class="container">
                <div class="row flex-row-reverse align-items-center justify-content-center">
                    <div class="col-lg-6 col-md-8 col-sm-10">
                        <div class="why__we-are-img">
                            <img src="../assets/img/images/why_we_are_img.png" alt="">
                            <div class="shape shape-one" data-aos="fade-down-right" data-aos-delay="500">
                                <img src="../assets/img/images/why_shape01.svg" alt="" class="injectable">
                            </div>
                            <div class="shape shape-two" data-aos="fade-up-right" data-aos-delay="500">
                                <img src="../assets/img/images/why_shape02.svg" alt="" class="injectable">
                            </div>
                            <div class="shape shape-three" data-aos="fade-up-left" data-aos-delay="500">
                                <img src="../assets/img/images/why_shape03.svg" alt="" class="injectable">
                            </div>
                            <div class="shape shape-four ribbonRotate">
                                <img src="../assets/img/images/why_shape04.svg" alt="" class="injectable">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="why__we-are-content">
                            <div class="section__title mb-10">
                                <span class="sub-title">چرا ما بهترینیم
                                    <strong class="shake">
                                        <img src="../assets/img/icon/pet_icon02.svg" alt="" class="injectable">
                                    </strong>
                                </span>
                                <h2 class="title rtl">موارد اضطراری حیوانات خانگی <br> که نیاز به مراقبت دارند.</h2>
                            </div>
                            <p>ما درک می کنیم که این
                                دوست پشمالو عضوی ارزشمند از خانواده شماست و شایسته است که حیوانات خانگی بهترین مراقبت را
                                داشته باشند
                            </p>
                            <div class="why__list-box" dir="rtl">
                                <ul class="list-wrap">
                                    <li>
                                        <div class="why__list-box-item">
                                            <div class="why__list-box-item-top">
                                                <div class="icon">
                                                    <img src="../assets/img/icon/check_icon.svg" alt="" class="injectable">
                                                </div>
                                                <h4 class="title">تجربه بیشتر</h4>
                                            </div>
                                            <p>به برنامه درمانی و توانایی های پزشک خود اطمینان داریم.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="why__list-box-item">
                                            <div class="why__list-box-item-top">
                                                <div class="icon">
                                                    <img src="../assets/img/icon/check_icon.svg" alt="" class="injectable">
                                                </div>
                                                <h4 class="title">قیمت مقرون به صرفه</h4>
                                            </div>
                                            <p>به برنامه درمانی و توانایی های پزشک خود اطمینان داریم.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="why__list-box-item">
                                            <div class="why__list-box-item-top">
                                                <div class="icon">
                                                    <img src="../assets/img/icon/check_icon.svg" alt="" class="injectable">
                                                </div>
                                                <h4 class="title">آموزش مدرن حیوانات خانگی</h4>
                                            </div>
                                            <p>به برنامه درمانی و توانایی های پزشک خود اطمینان داریم.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="why__list-box-item">
                                            <div class="why__list-box-item-top">
                                                <div class="icon">
                                                    <img src="../assets/img/icon/check_icon.svg" alt="" class="injectable">
                                                </div>
                                                <h4 class="title">یک برنامه روزانه را حفظ کنید</h4>
                                            </div>
                                            <p>به برنامه درمانی و توانایی های پزشک خود اطمینان داریم.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="counter__area">
            <div class="container">
                <div class="row flex-row-reverse align-items-center justify-content-center">
                    <div class="col-lg-5 col-md-8 order-0 order-lg-2">
                        <div class="counter__img">
                            <div class="mask-img-wrap">
                                <img src="../assets/img/images/counter_img.jpg" alt="img">
                            </div>
                            <div class="counter__img-shape">
                                <img src="../assets/img/images/counter_img_shape.svg" alt="" class="injectable">
                            </div>
                            <div class="shape">
                                <img src="../assets/img/images/counter_shape01.png" alt="img" class="ribbonRotate">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-7">
                        <div class="counter__content">
                            <div class="section__title white-title mb-10">
                                <span class="sub-title">اعتماد شما اولویت ماست
                                    <strong class="shake">
                                        <img src="../assets/img/icon/pet_icon02.svg" alt="" class="injectable">
                                    </strong>
                                </span>
                                <h2 class="title">مراقبت از حیوانات شما بصورت حرفه ای و کیفیت تضمینی</h2>
                            </div>
                            <p>ما درک می کنیم که دوست پشمالوی شما بخشی از زندگی خانگی شماست</p>
                            <router-link to="/about" class="btn border-btn white-btn"><img
                                src="../assets/img/icon/right_arrow.svg" alt=""
                                class="injectable rotate-180">خواندن بیشتر </router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-5 order-3">
                        <div class="counter__item-wrap rtl">
                            <div class="counter__item">
                                <h2 class="count"><span class="odometer" data-count="27"></span>+</h2>
                                <p class="text-left">27 سال سابقه</p>
                            </div>
                            <div class="counter__item">
                                <h2 class="count"><span class="odometer" data-count="23"></span>K</h2>
                                <p class="text-left">تعداد مشتریان</p>
                            </div>
                            <div class="counter__item">
                                <h2 class="count"><span class="odometer" data-count="15"></span>K+</h2>
                                <p class="text-left">نظرات مشتریان </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="counter__shape">
                <img src="../assets/img/images/counter_shape02.png" alt="img" data-aos="fade-up-left" data-aos-delay="400">
            </div>
        </section>

        <div class="brand__area">
            <div class="container">
                <div class="brand__item-wrap">
                    <div class="swiper brand-active">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" style="    width: 158.571px; margin-right: 30px;">
                                <div class="brand__item">
                                    <img src="../assets/img/brand/brand_img01.png" alt="img">
                                </div>
                            </div>
                            <div class="swiper-slide" style="    width: 158.571px; margin-right: 30px;">
                                <div class="brand__item">
                                    <img src="../assets/img/brand/brand_img02.png" alt="img">
                                </div>
                            </div>
                            <div class="swiper-slide" style="    width: 158.571px; margin-right: 30px;">
                                <div class="brand__item">
                                    <img src="../assets/img/brand/brand_img03.png" alt="img">
                                </div>
                            </div>
                            <div class="swiper-slide" style="    width: 158.571px; margin-right: 30px;">
                                <div class="brand__item">
                                    <img src="../assets/img/brand/brand_img04.png" alt="img">
                                </div>
                            </div>
                            <div class="swiper-slide" style="    width: 158.571px; margin-right: 30px;">
                                <div class="brand__item">
                                    <img src="../assets/img/brand/brand_img05.png" alt="img">
                                </div>
                            </div>
                            <div class="swiper-slide" style="    width: 158.571px; margin-right: 30px;">
                                <div class="brand__item">
                                    <img src="../assets/img/brand/brand_img06.png" alt="img">
                                </div>
                            </div>
                            <div class="swiper-slide" style="    width: 158.571px; margin-right: 30px;">
                                <div class="brand__item">
                                    <img src="../assets/img/brand/brand_img07.png" alt="img">
                                </div>
                            </div>
                            <div class="swiper-slide" style="    width: 158.571px; margin-right: 30px;">
                                <div class="brand__item">
                                    <img src="../assets/img/brand/brand_img03.png" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="team__area">
            <div class="container">
                <div class="row flex-row-reverse justify-content-center">
                    <div class="col-lg-6">
                        <div class="section__title text-center mb-40">
                            <span class="sub-title">ما زندگی و دنیای شما را تغییر می دهیم
                                <strong class="shake">
                                    <img src="../assets/img/icon/pet_icon02.svg" alt="" class="injectable">
                                </strong>
                            </span>
                            <h2 class="title">با پزشکان متخصص ما <br> آشنا شوید</h2>
                        </div>
                    </div>
                </div>
                <div class="row flex-row-reverse justify-content-center">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div class="team__item">
                            <div class="team__item-img ltr">
                                <div class="mask-img-wrap">
                                    <img src="../assets/img/team/team_img01.jpg" alt="img">
                                </div>
                                <div class="team__item-img-shape">
                                    <div class="shape-one">
                                        <img src="../assets/img/team/team_img_shape01.svg" alt="" class="injectable">
                                    </div>
                                    <div class="shape-two">
                                        <img src="../assets/img/team/team_img_shape02.svg" alt="" class="injectable">
                                    </div>
                                </div>
                                <div class="team__social">
                                    <ul class="list-wrap">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i
                                                    class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank"><i
                                                    class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.whatsapp.com/" target="_blank"><i
                                                    class="fab fa-whatsapp"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i
                                                    class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank"><i
                                                    class="fab fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team__item-content">
                                <h4 class="title"><router-link to="/team-details">داریا آندالورو</router-link></h4>
                                <span>تکنسین دامپزشکی</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div class="team__item">
                            <div class="team__item-img ltr">
                                <div class="mask-img-wrap">
                                    <img src="../assets/img/team/team_img02.jpg" alt="img">
                                </div>
                                <div class="team__item-img-shape">
                                    <div class="shape-one">
                                        <img src="../assets/img/team/team_img_shape01.svg" alt="" class="injectable">
                                    </div>
                                    <div class="shape-two">
                                        <img src="../assets/img/team/team_img_shape02.svg" alt="" class="injectable">
                                    </div>
                                </div>
                                <div class="team__social">
                                    <ul class="list-wrap">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i
                                                    class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank"><i
                                                    class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.whatsapp.com/" target="_blank"><i
                                                    class="fab fa-whatsapp"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i
                                                    class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank"><i
                                                    class="fab fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team__item-content">
                                <h4 class="title"><router-link to="/team-details">مایکل برایان</router-link></h4>
                                <span>متخصص پزشکی</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div class="team__item">
                            <div class="team__item-img ltr">
                                <div class="mask-img-wrap">
                                    <img src="../assets/img/team/team_img03.jpg" alt="img">
                                </div>
                                <div class="team__item-img-shape">
                                    <div class="shape-one">
                                        <img src="../assets/img/team/team_img_shape01.svg" alt="" class="injectable">
                                    </div>
                                    <div class="shape-two">
                                        <img src="../assets/img/team/team_img_shape02.svg" alt="" class="injectable">
                                    </div>
                                </div>
                                <div class="team__social">
                                    <ul class="list-wrap">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i
                                                    class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank"><i
                                                    class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.whatsapp.com/" target="_blank"><i
                                                    class="fab fa-whatsapp"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i
                                                    class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank"><i
                                                    class="fab fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team__item-content">
                                <h4 class="title"><router-link to="/team-details">کارنلی گوجان</router-link></h4>
                                <span>تکنسین مواد غذایی</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div class="team__item">
                            <div class="team__item-img ltr">
                                <div class="mask-img-wrap">
                                    <img src="../assets/img/team/team_img04.jpg" alt="img">
                                </div>
                                <div class="team__item-img-shape">
                                    <div class="shape-one">
                                        <img src="../assets/img/team/team_img_shape01.svg" alt="" class="injectable">
                                    </div>
                                    <div class="shape-two">
                                        <img src="../assets/img/team/team_img_shape02.svg" alt="" class="injectable">
                                    </div>
                                </div>
                                <div class="team__social">
                                    <ul class="list-wrap">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i
                                                    class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank"><i
                                                    class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.whatsapp.com/" target="_blank"><i
                                                    class="fab fa-whatsapp"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i
                                                    class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank"><i
                                                    class="fab fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team__item-content">
                                <h4 class="title"><router-link to="/team-details">لیزای آریانیا</router-link></h4>
                                <span>تکنسین دامپزشکی</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="team__bottom-content">
                    <router-link to="/team" class="btn hover-effect"><img
                        src="../assets/img/icon/right_arrow.svg" alt="" class="injectable rotate-180">دیدن همه پزشکان </router-link>
                    <p>تیم پزشکان متخصص با ارزش ما</p>
                </div>
            </div>
            <div class="team__shape">
                <img src="../assets/img/team/team_shape.png" alt="img" class="ribbonRotate">
            </div>
        </section>

        <section class="testimonial__area">
            <div class="container">
                <div class="row flex-row-reverse align-items-center justify-content-center">
                    <div class="col-lg-6 col-md-8 order-0 order-lg-2">
                        <div class="testimonial__img">
                            <div class="mask-img testimonial__img-mask">
                                <img src="../assets/img/images/testimonial_img.jpg" alt="img">
                            </div>
                            <div class="testimonial__img-shape">
                                <div class="shape-one">
                                    <img src="../assets/img/images/testimonial_img_shape.svg" alt="" class="injectable">
                                </div>
                                <div class="shape-two">
                                    <img src="../assets/img/images/testimonial_shape03.png" alt="img"
                                        class="alltuchtopdown">
                                </div>
                            </div>
                            <div class="review__box">
                                <div class="review__box-shape">
                                    <img src="../assets/img/images/review_shape.svg" alt="" class="injectable">
                                </div>
                                <div class="review__box-content">
                                    <img src="../assets/img/icon/star.svg" alt="" class="injectable">
                                    <h2 class="title">+۱۵۰۰</h2>
                                    <span>بازدید</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="testimonial__item-wrap">
                            <div class="swiper testimonial-active">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="testimonial__item">
                                            <div class="testimonial__icon">
                                                <img src="../assets/img/icon/quote.svg" alt="" class="injectable">
                                            </div>
                                            <div class="testimonial__content">
                                                <h2 class="title">سلامت حیوانات خانگی مهم است</h2>
                                                <p>"ما با شما همکاری می‌کنیم تا برنامه‌های مراقبتی شخصی‌سازی‌شده، از
                                                    جمله مدیریت بیماری‌های مزمن، طراحی کنیم.

                                                    تعهد ما این است که شبکه‌ای برتر از خدمات بهداشتی در منطقه ارائه
                                                    دهیم،

                                                    با تمرکز بر مراقبت بیمارمحور که الهام‌بخش و اثرگذار باشد."</p>
                                                <div class="testimonial__author">
                                                    <div class="testimonial__author-thumb">
                                                        <img src="../assets/img/images/testi_author01.png" alt="">
                                                    </div>
                                                    <div class="testimonial__author-content">
                                                        <h4 class="title">اورانی جک</h4>
                                                        <span>مطالعه بازرگانی</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial__item">
                                            <div class="testimonial__icon">
                                                <img src="../assets/img/icon/quote.svg" alt="" class="injectable">
                                            </div>
                                            <div class="testimonial__content">
                                                <h2 class="title">سلامت حیوانات خانگی مهم است</h2>
                                                <p>"ما با شما همکاری می‌کنیم تا برنامه‌های مراقبتی شخصی‌سازی‌شده، از
                                                    جمله مدیریت بیماری‌های مزمن، طراحی کنیم.

                                                    تعهد ما این است که شبکه‌ای برتر از خدمات بهداشتی در منطقه ارائه
                                                    دهیم،

                                                    با تمرکز بر مراقبت بیمارمحور که الهام‌بخش و اثرگذار باشد."</p>
                                                <div class="testimonial__author">
                                                    <div class="testimonial__author-thumb">
                                                        <img src="../assets/img/images/testi_author01.png" alt="">
                                                    </div>
                                                    <div class="testimonial__author-content">
                                                        <h4 class="title">اورانی جک</h4>
                                                        <span>مطالعه بازرگانی</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial__shape-wrap">
                <img src="../assets/img/images/testimonial_shape01.png" alt="img" data-aos="fade-down-right"
                    data-aos-delay="400">
                <img src="../assets/img/images/testimonial_shape02.png" alt="img" data-aos="fade-right"
                    data-aos-delay="400">
            </div>
        </section>

        <section class="registration__area">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-12">
                        <div class="registration__inner-wrap">
                            <h2 class="title rtl">برای بازدید از امروز برنامه ریزی کنید!</h2>
                            <div class="shape">
                                <img src="../assets/img/images/registration_shape.svg" alt="">
                            </div>
                            <form action="#">
                                <div class="row flex-row-reverse gutter-15" dir="rtl">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="form-grp">
                                            <label for="name">نام</label>
                                            <input id="name" type="text" placeholder="نام">
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="form-grp select-grp">
                                            <label>نوع حیوان</label>
                                            <select name="pet_type" class="orderby">
                                                <option value="Select Pet Type">انتخاب نوع</option>
                                                <option value="Cat">گربه</option>
                                                <option value="Dog">سگ</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="form-grp select-grp">
                                            <label>علاقه به</label>
                                            <select name="interest" class="orderby">
                                                <option value="Select Service">اتخاب خدمات</option>
                                                <option value="Pet Training">آموزش حیوانات خانگی</option>
                                                <option value="Pet Grooming">نظافت حیوانات خانگی</option>
                                                <option value="Care Services">خدمات مراقبت</option>
                                                <option value="Pet Boarding">صفحه خانه حیوانات خانگی</option>
                                                <option value="Pet Bath">حمام حیوانات خانگی</option>
                                                <option value="Pet Adoption">پذیرفتن حیوان خانگی</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="form-grp">
                                            <label for="date">تاریخ</label>
                                            <input id="date" class="textbox-n" type="date">
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="form-grp">
                                            <label for="time">زمان</label>
                                            <input id="time" placeholder="08:00 am - 10:00 am">
                                            <i class="flaticon-three-o-clock-clock"></i>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="form-grp">
                                            <label for="phone">شماره همراه</label>
                                            <input id="phone" type="number" placeholder="+983 888 ....">
                                        </div>
                                    </div>
                                </div>
                                <div class="submit__btn text-center mt-25">
                                    <button type="submit" class="btn hover-effect"><img
                                        src="../assets/img/icon/right_arrow.svg" alt=""
                                        class="injectable rotate-180">شروع رزرو </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="blog__post-area">
            <div class="container">
                <div class="row flex-row-reverse align-items-center">
                    <div class="col-md-8">
                        <div class="section__title mb-40">
                            <span class="sub-title">اخبار و وبلاگ ها
                                <strong class="shake">
                                    <img src="../assets/img/icon/pet_icon02.svg" alt="" class="injectable">
                                </strong>
                            </span>
                            <h2 class="title">مقالات اخیر </h2>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="view__all-btn text-start mb-40">
                            <router-link to="/blog" class="btn btn-two"><img
                                src="../assets/img/icon/right_arrow.svg" alt=""
                                class="injectable rotate-180">مشاهده همه پست ها </router-link>
                        </div>
                    </div>
                </div>
                <div class="row flex-row-reverse justify-content-center rtl">
                    <div class="col-lg-4 col-md-6 col-sm-8">
                        <div class="blog__post-item shine-animate-item">
                            <div class="blog__post-thumb">
                                <div class="blog__post-mask shine-animate">
                                    <router-link to="/blog-detail"><img src="../assets/img/blog/blog_post01.jpg"
                                            alt="img"></router-link>
                                    <ul class="list-wrap blog__post-tag">
                                        <li><router-link to="/blog">حیوان خانگی</router-link></li>
                                        <li><router-link to="/blog">پزشکی</router-link></li>
                                    </ul>
                                </div>
                                <div class="shape">
                                    <img src="../assets/img/blog/blog_img_shape.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="blog__post-content">
                                <div class="blog__post-meta">
                                    <ul class="list-wrap">
                                        <li><i class="flaticon-user"></i>توسط <router-link to="/blog-detail">admin</router-link></li>
                                        <li><i class="flaticon-calendar"></i>۲۵ اسفند, ۱۴۰۳</li>
                                    </ul>
                                </div>
                                <h2 class="title"><router-link to="/blog-detail">تهویه هوای داخل خانه بسیار مهم است
                                    </router-link></h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-8">
                        <div class="blog__post-item shine-animate-item">
                            <div class="blog__post-thumb">
                                <div class="blog__post-mask shine-animate">
                                    <router-link to="/blog-detail"><img src="../assets/img/blog/blog_post02.jpg"
                                            alt="img"></router-link>
                                    <ul class="list-wrap blog__post-tag">
                                        <li><router-link to="/blog">مراقبت</router-link></li>
                                    </ul>
                                </div>
                                <div class="shape">
                                    <img src="../assets/img/blog/blog_img_shape.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="blog__post-content">
                                <div class="blog__post-meta">
                                    <ul class="list-wrap">
                                        <li><i class="flaticon-user"></i>توسط <router-link to="/blog-details">admin</router-link></li>
                                        <li><i class="flaticon-calendar"></i>۲۵ اسفند, ۱۴۰۳</li>
                                    </ul>
                                </div>
                                <h2 class="title"><router-link to="/blog-details">تهویه هوای داخل خانه بسیار مهم است
                                    </router-link></h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-8">
                        <div class="blog__post-item shine-animate-item">
                            <div class="blog__post-thumb">
                                <div class="blog__post-mask shine-animate">
                                    <router-link to="/blog-details"><img src="../assets/img/blog/blog_post03.jpg"
                                            alt="img"></router-link>
                                    <ul class="list-wrap blog__post-tag">
                                        <li><router-link to="/blog">مراقبت از حیوانات خانگی</router-link></li>
                                    </ul>
                                </div>
                                <div class="shape">
                                    <img src="../assets/img/blog/blog_img_shape.svg" alt="" class="injectable">
                                </div>
                            </div>
                            <div class="blog__post-content">
                                <div class="blog__post-meta">
                                    <ul class="list-wrap">
                                        <li><i class="flaticon-user"></i>توسط <router-link to="/blog-details">admin</router-link></li>
                                        <li><i class="flaticon-calendar"></i>۲۵ اسفند, ۱۴۰۳</li>
                                    </ul>
                                </div>
                                <h2 class="title"><router-link to="/blog-details">تهویه هوای داخل خانه بسیار مهم است
                                    </router-link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog__shape-wrap">
                <img src="../assets/img/blog/blog_shape01.png" alt="img" data-aos="fade-up-right" data-aos-delay="400">
                <img src="../assets/img/blog/blog_shape02.png" alt="img" class="ribbonRotate">
            </div>
        </section>

        <div class="instagram__area">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-12">
                        <div class="instagram__follow-btn">
                            <a href="https://www.instagram.com/" target="_blank">ما را در اینستاگرام دنبال کنید</a>
                        </div>
                    </div>
                </div>
                <div class="swiper instagram-active">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="instagram__item">
                                <a href="https://www.instagram.com/" target="_blank"><img
                                        src="../assets/img/instagram/instagram_img01.jpg" alt=""></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="instagram__item">
                                <a href="https://www.instagram.com/" target="_blank"><img
                                        src="../assets/img/instagram/instagram_img02.jpg" alt=""></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="instagram__item">
                                <a href="https://www.instagram.com/" target="_blank"><img
                                        src="../assets/img/instagram/instagram_img03.jpg" alt=""></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="instagram__item">
                                <a href="https://www.instagram.com/" target="_blank"><img
                                        src="../assets/img/instagram/instagram_img04.jpg" alt=""></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="instagram__item">
                                <a href="https://www.instagram.com/" target="_blank"><img
                                        src="../assets/img/instagram/instagram_img05.jpg" alt=""></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="instagram__item">
                                <a href="https://www.instagram.com/" target="_blank"><img
                                        src="../assets/img/instagram/instagram_img03.jpg" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import bannerBg from '@/assets/img/banner/banner_bg.jpg';

</script>

<style scoped>
.circle-text {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  animation: rotateCircle 12s linear infinite;
  z-index: 1;
}

.circle-text span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  font-size: 14px;
  font-weight: 700;
  color: #000;
  white-space: pre;
}
</style>
