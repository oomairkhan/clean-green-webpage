<template>
  <v-app>
    <!-- <v-app-bar class="appBar" flat>
      <v-row class="app-bar">
        <v-col style="display: flex">
          <v-card-text>
            <v-icon icon="$vuetify"></v-icon>
            18667545970
          </v-card-text>
          <v-card-text class="header-text">
            <v-icon>$vuetify</v-icon>
            18667545970
          </v-card-text>
        </v-col>
        <v-col style="display: none;"></v-col>
        <v-col>
          <v-card-text style="text-align: center;">
            <v-icon>$vuetify</v-icon>
            3133 W, Frye rd. Suite #101 Chandler, AZ 85226
          </v-card-text>
        </v-col>
      </v-row>
    </v-app-bar> -->
    
    <v-main class="main" style="background-color: black;">
      <v-card style="background-color: transparent">
        <v-row class="mainRow" style="min-height: fit-content; background-color: transparent">
          <v-col class="logoContainer" style="background-color: transparent">
            <v-img class="logoMain" :src="logo100k" style=""></v-img>
          </v-col>
          <v-col class="extraComponent" ></v-col>
          <v-col class="navbar" style="color: white">
            <v-card-text v-on:click="navClicks('about-us')" class="nav-bar-links-left">
              ABOUT US
            </v-card-text>
            <v-card-text v-on:click="navClicks('services')" class="nav-bar-links">
              SERVICES WE OFFER
            </v-card-text>
            <v-card-text v-on:click="navClicks('contactUs')" class="nav-bar-links-right" style="text-align: right;" >
              GET AN ESTIMATE
            </v-card-text>
          </v-col>
          <v-col class="extraComponent"></v-col>
        </v-row>
        <v-row>
          <!-- <v-col style="background-image: url('../assets/back1.jpg') !important; background-size: 100% 100%;background-position: center;color: white; height: 60vh; display: grid; align-content: center; justify-content: center; text-align: center; justify-items: center"> -->
          <v-col style="background-color: transparent; color: white; height: 60vh;">
            <v-card flat style="padding: 0; margin: 0; color: #008000; width: 100%; height: 100%; display: grid; align-content: center; justify-content: center; text-align: center; justify-items: center">
              <v-img :src="back1" cover style="position: absolute; height: 100%; width: 100%; z-index: -1;"></v-img>
              <v-card-title class="title1">
                Clean & Green Property Care
              </v-card-title>
              <v-card-text class="subtitle1">
                Sustainable Solutions for a Spotless Space
              </v-card-text>
              <v-btn variant="outlined" class="freeEstimate">Get a Free Estimate</v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-row id="about-us" class="imagerow" >
          <v-col cols="5" style="display: grid; justify-content: center">
            <v-img :src="cleaningLady" class="image1" style=""></v-img>
          </v-col>
          <v-col class="column2" style="background-color: transparent">
            <v-img :src="logo100k" class="image2" style=""></v-img>
            <v-card-text class="title2" style="">
              Is your Business in Need of a Cleaning Upgrade?
            </v-card-text>
            <v-card-text class="subtitle2" style="color: white">
              Tailored Solutions for Sparkling Results!
            </v-card-text>
            <v-btn class="freeEstimate" style="width: fit-content; background-color: cadetblue">Get a Free Estimate</v-btn>
          </v-col>
        </v-row>
        <!-- <v-row class="limitedRow" style="">
          <v-col style="background-color: grey; color: white; height: 40vh; display: grid; align-content: center; justify-content: center; text-align: center; justify-items: center">
            <v-card-title class="limitedTitle" style="">
              Limited Time Offer:
            </v-card-title>
            <v-card-text class="limitedText" style="">
              50% OFF for the first month only available until the end of month.
            </v-card-text>
          </v-col>
        </v-row> -->
        <v-row id="services">
          <v-col class="servicesCol" style="background-color: white; height: 70vh; display: grid; align-content: center; justify-content: center; text-align: center; justify-items: center">
            <v-card-text style="padding:0; font-size: 18px; font-weight: bold; display: flex; align-items: center; color: #0486dd">
              <v-divider thickness="3" style="width: 100px; opacity: 1"></v-divider>
              <span style="margin: 0 10px">SERVICES</span>
              <v-divider thickness="3" style="opacity: 1"></v-divider>
            </v-card-text>
            <v-card-title style="padding:0; margin-bottom: 12px; font-size: 41px; font-weight: bold; color: greenyellow">
              Services We Offer
            </v-card-title>
            <v-row class="servicesRow" >
              <v-card class="servicesCard" flat style="padding: 0 5px 5px; background-color: #eeeeee">
                <v-img :src="service1" style="width: 200px; height: 130px"></v-img>
                <v-card-text style="font-size: 16px; justify-content: center; margin: 10px 0">
                  Janitorial Services
                  <v-divider thickness="3" style="width: 30%; margin: auto; color: blue"></v-divider>
                </v-card-text>
              </v-card>
              <v-card class="servicesCard" flat style="padding: 0 5px 5px; background-color: #eeeeee; margin: 0 25px">
                <v-img :src="service2" style="width: 200px; height: 130px"></v-img>
                <v-card-text style="font-size: 16px; justify-content: center; margin: 10px 0">
                  Green Cleaning
                  <v-divider thickness="3" style="width: 30%; margin: auto; color: blue"></v-divider>
                </v-card-text>
              </v-card>
              <v-card class="servicesCard" flat style="padding: 0 5px 5px; background-color: #eeeeee">
                <v-img :src="service3" style="width: 200px; height: 130px"></v-img>
                <v-card-text style="font-size: 16px; justify-content: center; margin: 10px 0;">
                  Post Construction Cleaning
                  <v-divider thickness="3" style="width: 30%; margin: auto; color: blue"></v-divider>
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
        <v-row style="margin-bottom: 30px;">
          <v-col cols="6">
            <v-card style="padding: 0; margin: 0; height: 75vh; width: 100%; color: black;">
              <v-img :src="contactBack" cover style="position: absolute; height: 100%; width: 100%; z-index: -1;"></v-img>
              <v-col style="display: grid; justify-items: left; height: 100%; align-content: space-around; padding: 0 5%">
                <v-card-title style="padding:0; font-size: 30px; font-weight: bold;">
                  GET A FREE ESTIMATE
                </v-card-title>
                <v-row style="display: grid" >
                  <v-card-text style="font-size: 25px; text-align: left;">
                    Call Us
                  </v-card-text>
                  <v-card-text style="font-size: 25px">
                    7739511771
                  </v-card-text>
                </v-row>
                <v-row style="display: grid;">
                  <v-card-text style="text-align: left; font-size: 25px;">
                    Find Us
                  </v-card-text>
                  <v-col>
                    <v-card-text style="text-align: left; font-size: 25px;">
                      123 Simpson Avenue, Elmo St.
                    </v-card-text>
                    <v-card-text style="text-align: left; font-size: 25px;">
                      Illinois 60111
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
          </v-col>
          <v-col cols="6" style="background-color: #0486dd; color: white; align-content: center; justify-content: center; text-align: center; justify-items: center">
            <div id="contactUs" class="contactForm" style="height: 100%;">
              <div class="contactUsCard2" style="height: 100%">
                  <!-- <form method="POST"  action="{% url 'contact_view' %}" class="form-card" style="height: 100%; align-content: center;"> -->
                  <form class="form-card" style="height: 100%; align-content: center;">
                  <!-- <form method="POST" class="row form" style="width: 100%; display: flex; justify-content: center"> -->
                      <!-- {% csrf_token %} -->
                      <h4 style="color: white; text-align: center; font-size: 30px; ">
                          Contact Us
                      </h4>
                      <div class="row" style="margin: 0;">
                          <div class="mb-3 col-12" style="padding: 0">
                              <input type="text" name="name" class="form-control forms" id="name" placeholder="Name" aria-describedby="nameHelp">
                            </div>
                            <div class="mb-3 col-12" style="padding: 0">
                              <input type="email" name="email" class="form-control forms"  placeholder="E-mail address" id="emailaddr">
                            </div>
                            <div class="mb-3 col-12" style="padding: 0;">
                              <textarea class="form-control forms" id="message" placeholder="Message" rows="4" name="message" style="min-height: 174px; max-height: 174px; border-radius: 0"></textarea>
                            </div>
                      </div>
                      <div>
                          <button type="submit" class="btn btn-primary msgSendBtn">
                              Send
                          </button>
                      </div>
                  </form>
              </div>
          </div>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import InterviewBuilder from "@/assets/logo.svg"
import logo100k from "@/assets/logo100k.png"
import service1 from "@/assets/janitor.jpg"
import service2 from "@/assets/green-cleaning.jpg"
import service3 from "@/assets/post-construction-cleaning.jpg"
import back1 from "@/assets/back1.jpg"
import contactBack from "@/assets/contactBack.jpg"
import cleaningLady from "@/assets/cleaningLady.jpg"

export default{
  data() {
    return{
      defaultImage: InterviewBuilder,
      logo100k: logo100k,
      service1: service1,
      service2: service2,
      service3: service3,
      back1: back1,
      contactBack: contactBack,
      cleaningLady: cleaningLady,
    }
  },
  methods:{
    navClicks(id){
      var element = document.getElementById(id); 
      element.scrollIntoView();
    }
  }
}

</script>

<style scoped>
.navbar{
  display: flex; min-width: fit-content; align-items: center; justify-items: center
}
.logoContainer{
  width: fit-content;
  height: fit-content
}
.nav-bar-links{
  margin: 0 30px;
  cursor: pointer
}
.nav-bar-links-left{
  margin: 0 30px;
  cursor: pointer
}
.nav-bar-links-right{
  margin: 0 30px;
  cursor: pointer
}
.nav-bar-links:hover, .nav-bar-links-left:hover, .nav-bar-links-right:hover{
  color: blue
}
.contactToday{
  width: fit-content;
  background-color: white;
  color: green;
  cursor: pointer;
  font-weight: bold
}
.freeEstimate1{
  width: fit-content;
  background-color: transparent;
  cursor: pointer
}
.v-main{
}
.v-row{
  margin: 0;
}
.v-col{
  padding: 0
}
.v-card-text{
  padding: 0 !important
}
.appBar{
  background-color: #0dfd00;
  height: fit-content;
}
.title1{
  padding:0;
  font-size: 40px;
  font-weight: bold;
}
.subtitle1{
  padding:0; margin-bottom: 12px; font-size: 30px;
}
.image1{
  width: 450px; aspect-ratio: 1/1;
}
.image2{
  height: 50px; width: 50px
}
.title2{
  padding:0; font-size: 26px; font-weight: bold; color: green
}
.column2{
  background-color: white;
  height: 60vh;
  display: grid;
  align-content: center;
  justify-content: center;
  text-align: center;
  justify-items: center
}
.subtitle2{
  padding:0; margin-bottom: 12px; font-size: 16px;
}
.limitedRow{
  padding: 30px;
  background-color: #eeeeee
}
.limitedTitle{
  padding:0; font-size: 30px; font-weight: bold;
}
.limitedText{
  padding:0; margin-bottom: 12px; font-size: 20px;
}
.logoMain{
  height: 95px; margin: 5px 0
}
.form-control{
  height: 45px;
  width: 50%;
  margin: 10px 0
}
.msgSendBtn{
  width: 50%;
  max-width: 400px;
  height: 35px;
  margin-top: 10px;
  cursor: pointer
}
@media only screen and (max-width: 500px){
  .app-bar{
    display: grid;
  }
  .extraComponent{
    display: none
  }
  .mainRow{
      display: grid;
  }
  .logoMain{
    min-height: 100px; margin: 5px 0; aspect-ratio: 1
  }
  .header-text{
    text-align: right;
  }
  .main{
    margin-top: 20px
  }
  .navbar{
    min-width: 100%; 
    align-items: center; 
    justify-items: space-between;
    justify-content: space-between
  }
  .logoContainer{
    width: 100%;
    display: grid;
    justify-content: center;
    height: fit-content
  }
  .nav-bar-links{
    font-size: 12px;
    margin: 0 2px;
    max-width: fit-content;
    text-align: center;
  }  
  .nav-bar-links-left{
    font-size: 12px;
    margin: 0 2px 0 1px;
    max-width: fit-content
  }  
  .nav-bar-links-right{
    font-size: 12px;
    margin: 0 1px 0 2px;
    max-width: fit-content
  }
  .title1{
    font-size: 25px;
    font-weight: bold;
  }
  .subtitle1{
    padding:0; margin-bottom: 12px; font-size: 18px;
  }
  .freeEstimate{
    font-size: 12px;
  }
  .imagerow{
    display: grid;
    justify-items: center;
  }
  .image1{
    width: 250px; aspect-ratio: 1/1;
  }
  .column2{
    background-color: white;
    height: 40vh;
    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;
    justify-items: center
  }
  .image2{
    height: 50px; width: 50px
  }
  .title2{
    padding:0;
    font-size: 19px;
    font-weight: bold;
    color: green;
    text-align: center;
    height: fit-content;
  }
  .subtitle2{
    padding:0; margin-bottom: 12px; font-size: 14px;
  }
  .limitedRow{
    padding: 15px;
    margin-bottom: 80px;
  }
  .limitedTitle{
    font-size: 19px;
    font-weight: bold;
  }
  .limitedText{
    padding:0; margin-bottom: 12px; font-size: 14px;
  }
  .servicesCol{
    margin: 0 0 80px 0
  }
  .servicesRow{
    display: grid;
    justify-content: center;
  }
  .servicesCard{
    margin: 0 0 15px 0 !important
  }
}
</style>

<style>
.appBar .v-toolbar__content{
  height: fit-content !important;
  padding: 2px 0
}
.freeEstimate1 .v-btn__overlay{
  display: none;
}
</style>
