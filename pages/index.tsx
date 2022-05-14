import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Bio-Obelisk</title>
        <meta name="description" content="Biology Tutorials" />
      </Head>
      <section className="bio-slider d-flex flex-column justify-content-center align-items-center">
        <div className="container slider-container ">
          <div className="row">
            <div className="col-md-6 col-xs-12 slider-text mr-3">
              <h1 className="text-white">
                <span className="slider-heading">Start learning from</span>
                <span className="slider-subheading">
                  <span className="bio-text">Bio</span> Obelisk</span>
              </h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                it to make</p>
              <button className="btn btn-info btn-biolink">Shop now</button>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <article className="bio-vision mt-5">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 text-center">
              <Image className="bio-vision-image" src="/images/bioobselink-Recovered_09.png" alt="our vision image" width="350" height="350" />
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5 d-flex align-items-center">
              <div className="mr-5">
                <h2 className="font-size-30 text-capitalise">our vision</h2>
                <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s</p>
                <button className="btn btn-info btn-biolink">know more</button>
              </div>

            </div>
          </div>
        </article>
        <section className="explore-top-courses mt-5">
          <div className="row just-content-space-between mb-5">
            <div className="course-head col">
              <h2 className="font-weight-bold text-capitalise"> Explore top courses</h2>
              <p> dummy text of the printing and typesetting industry. Lorem Ipsum has b</p>
            </div>
            <div className="right-btn col text-right d-flex justify-content-end align-items-center">
              <button className="btn btn-info btn-biolink">View all courses</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card mb-4 box-shadow p-3 course-items">
                <Image className="card-img-top mb-4" src="/images/bioobselink-Recovered_13.png" width="200" height="200" />
                <div className="card-body p-0">
                  <p className="card-text font-weight-bold mb-3">Introduction to biology...</p>
                  <a href="http://" className="text-uppercase">enroll</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4 box-shadow p-3 course-items">
                <Image className="card-img-top mb-4" src="/images/bioobselink-Recovered_17.png" width="200" height="200"/>
                <div className="card-body p-0">
                  <p className="card-text font-weight-bold mb-3">Introduction to biology...</p>
                  <a href="http://" className="text-uppercase">enroll</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4 box-shadow p-3 course-items">
                <Image className="card-img-top mb-4" src="/images/bioobselink-Recovered_15.png" width="200" height="200"/>
                <div className="card-body p-0">
                  <p className="card-text font-weight-bold mb-3">Introduction to biology...</p>
                  <a href="http://" className="text-uppercase">enroll</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4 box-shadow p-3 course-items">
                <Image className="card-img-top mb-4" src="/images/bioobselink-Recovered_19.png" width="200" height="200"/>
                <div className="card-body p-0">
                  <p className="card-text font-weight-bold mb-3">Introduction to biology...</p>
                  <a href="http://" className="text-uppercase">enroll</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="bio-course-count">

      </section>
      <div className="container">
        <section className="master-programme mt-5">
          <div className="row just-content-space-between mb-2 ">
            <div className="course-head col">
              <h2 className="font-weight-bold text-capitalise"> master programme</h2>
              <p> dummy text of the printing and typesetting industry. Lorem Ipsum has b</p>
            </div>
            <div className="right-btn col text-right d-flex justify-content-end align-items-center">
              <button className="btn btn-info btn-biolink">View all courses</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card mb-4 box-shadow border-0 master-programme-item">
                <Image className="card-img-top mb-4" src="/images/bioobselink-Recovered_26.png" width="200" height="200" />
                <div className="card-body">
                  <p className="card-text font-weight-bold mb-3">Introduction to biology...</p>
                  <div className="enroll-btn">
                    <a href="http://" className="text-uppercase">enroll</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4 box-shadow border-0 master-programme-item">
                <Image className="card-img-top mb-4" src="/images/bioobselink-Recovered_28.png" width="200" height="200"/>
                <div className="card-body">
                  <p className="card-text font-weight-bold mb-3">Introduction to biology...</p>
                  <div className="enroll-btn">
                    <a href="http://" className="text-uppercase">enroll</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4 box-shadow border-0 master-programme-item">
                <Image className="card-img-top mb-4" src="/images/bioobselink-Recovered_30.png" width="200" height="200"/>
                <div className="card-body">
                  <p className="card-text font-weight-bold mb-3">Introduction to biology...</p>
                  <div className="enroll-btn">
                    <a href="http://" className="text-uppercase">enroll</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4 box-shadow border-0 master-programme-item">
                <Image className="card-img-top mb-4" src="/images/bioobselink-Recovered_32.png" width="200" height="200"/>
                <div className="card-body">
                  <p className="card-text font-weight-bold mb-3">Introduction to biology...</p>
                  <div className="enroll-btn">
                    <a href="http://" className="text-uppercase">enroll</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="start-learning mt-5">
          <div className="row d-flex justify-content-center pt-5 pb-5">
            <div className="col-8 text-center">
              <h2 className="text-capitalise mt-3 font-weight-bold">Ready to start learning? Contact us</h2>
              <p className="mt-3 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s</p>
              <div className="buttons d-flex justify-content-around mb-4">
                <button className="btn btn-info btn-biolink">know more</button>
                <button className="btn btn-info btn-biolink">Contact us</button>
              </div>
            </div>
          </div>

        </section>
        <section className="certification-course mt-5">
          <div className="row just-content-space-between mb-2 ">
            <div className="course-head col">
              <h2 className="font-weight-bold text-capitalise"> Certification course</h2>
              <p> dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="right-btn col text-right d-flex justify-content-end align-items-center">

            </div>
          </div>
          <div className="certification-videos">
            <div className="cerficate-items row-one-column-one">
              <Image className="w-100" src="/images/bioobselink-Recovered_42.png" alt="" width="200" height="200"/>
            </div>
            <div className="cerficate-items row-one-column-two">
              <Image className="w-100" src="/images/bioobselink-Recovered_42.png" alt="" width="200" height="200"/>
            </div>
            <div className="cerficate-items row-two-column-one">
              <Image className="w-100" src="/images/bioobselink-Recovered_46.png" alt="" width="200" height="200"/>
            </div>
            <div className="cerficate-items row-two-column-two">
              <Image className="w-100" src="/images/bioobselink-Recovered_48.png" alt="" width="200" height="200"/>
            </div>
            <div className="cerficate-items row-two-column-three">
              <Image className="w-100" src="/images/bioobselink-Recovered_50.png" alt="" width="200" height="200"/>
            </div>
            <div className="cerficate-items row-two-column-four">
              <Image className="w-100" src="/images/bioobselink-Recovered_52.png" alt="" width="200" height="200"/>
            </div>
          </div>
        </section>

      </div>
      <section className="testimonial pb-4 pt-3 mt-5">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="testimonit-head">
                What our client say
              </h3>
              <p className="mb-5">dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="testimonial-box">
                <p className="description">dummy text of the printing and typesetting industry. dummy text of the printing and typesetting industry.
                  dummy text of the printing and typesetting industry.</p>
                <p className="m-0">Abhiram Tiyu</p>
                <p>
                  <small>Developer</small>
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="testimonial-box">
                <p className="description">dummy text of the printing and typesetting industry. dummy text of the printing and typesetting industry.
                  dummy text of the printing and typesetting industry.</p>
                <p className="m-0">Abhiram Tiyu</p>
                <p>
                  <small>Developer</small>
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="testimonial-box">
                <p className="description">dummy text of the printing and typesetting industry. dummy text of the printing and typesetting industry.
                  dummy text of the printing and typesetting industry.</p>
                <p className="m-0">Abhiram Tiyu</p>
                <p>
                  <small>Developer</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="meetexperts">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="testimonit-head">
                Meet our experts
              </h3>
              <p className="mb-5">dummy text of the printing and typesetting industry.nting and typesetting industry</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-3 text-center">

              <div className="col-md-12 col-sm-12 experts-list">
                <div className="expert-image">
                  <Image className="imagerounded-circle" src="/images/shutterstock_648907024.jpg" alt="experts" width="200" height="200"/>
                </div>
              </div>

              <p className="font-weight-bold m-0 pt-2">Abhiram Tiyu</p>
              <p>Developer</p>
            </div>
            <div className="col-md-3 col-sm-3 text-center">
              <div className="col-md-12 col-sm-12 experts-list">
                <div className="expert-image">
                  <Image className="imagerounded-circle" src="/images/images.jpg" alt="experts" width="200" height="200"/>
                </div>
              </div>
              <p className="font-weight-bold m-0 pt-2">Abhiram Tiyu</p>
              <p>Developer</p>
            </div>
            <div className="col-md-3 col-sm-3 text-center">
              <div className="col-md-12 col-sm-12 experts-list">
                <div className="expert-image">
                  <Image className="imagerounded-circle" src="/images/images2.jpg" alt="experts" width="200" height="200"/>
                </div>
              </div>
              <p className="font-weight-bold m-0 pt-2">Abhiram Tiyu</p>
              <p>Developer</p>
            </div>
            <div className="col-md-3 col-sm-3 text-center">
              <div className="col-md-12 col-sm-12 experts-list">
                <div className="expert-image">
                  <Image className="imagerounded-circle" src="/images/193061246.jpg" alt="experts" width="200" height="200"/>
                </div>
              </div>
              <p className="font-weight-bold m-0 pt-2">Abhiram Tiyu</p>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="branding">

      </section>

    </Fragment>
  )
}

export default Home
