<template>
  <v-app>
    <v-app-bar class="appBar" flat>
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
    </v-app-bar>
    
    <v-main class="main" style="background-color: black;">
      <v-card style="background-color: transparent">
        <v-row class="mainRow" style="min-height: fit-content; background-color: transparent">
          <v-col class="logoContainer" style="background-color: transparent">
            <v-img class="logoMain" :src="logo100k" style=""></v-img>
          </v-col>
          <v-col class="extraComponent" ></v-col>
          <v-col class="navbar" style="color: white">
            <v-card-text class="nav-bar-links-left" style="">
              HOME
            </v-card-text>
            <v-card-text class="nav-bar-links">
              ABOUT US
            </v-card-text>
            <v-card-text class="nav-bar-links">
              SERVICES WE OFFER
            </v-card-text>
            <v-card-text class="nav-bar-links">
              BENEFITS
            </v-card-text>
            <v-card-text class="nav-bar-links-right" style="text-align: right;" >
              WHO WE SERVE
            </v-card-text>
          </v-col>
          <v-col class="extraComponent"></v-col>
        </v-row>
        <v-row>
          <v-col style="background-color: green; color: white; height: 60vh; display: grid; align-content: center; justify-content: center; text-align: center; justify-items: center">
            <v-card-title class="title1">
              Clean & Green Property Care
            </v-card-title>
            <v-card-text class="subtitle1">
              Provide high-quality services for our valued clients
            </v-card-text>
            <v-btn variant="outlined" class="freeEstimate">Get a Free Estimate</v-btn>
          </v-col>
        </v-row>
        <v-row class="imagerow" >
          <v-col cols="5" style="display: grid; justify-content: center">
            <v-img :src="defaultImage" class="image1" style=""></v-img>
          </v-col>
          <v-col class="column2" style="background-color: transparent">
            <v-img :src="defaultImage" class="image2" style=""></v-img>
            <v-card-text class="title2" style="">
              Is your current cleaning company under performing & Unreliable?
            </v-card-text>
            <v-card-text class="subtitle2" style="color: white">
              We offer 100k Solutions for all your commercial cleaning needs!..
            </v-card-text>
            <v-btn class="freeEstimate" style="width: fit-content; background-color: cadetblue">Get a Free Estimate</v-btn>
          </v-col>
        </v-row>
        <v-row class="limitedRow" style="">
          <v-col style="background-color: grey; color: white; height: 40vh; display: grid; align-content: center; justify-content: center; text-align: center; justify-items: center">
            <v-card-title class="limitedTitle" style="">
              Limited Time Offer:
            </v-card-title>
            <v-card-text class="limitedText" style="">
              50% OFF for the first month only available until the end of month.
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="servicesCol" style="background-color: transparent; height: 70vh; display: grid; align-content: center; justify-content: center; text-align: center; justify-items: center">
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
        <v-row>
          <v-col style="background-color: #0486dd; color: white; height: 33vh; margin-bottom: 30px;display: grid; align-content: center; justify-content: center; text-align: center; justify-items: center">
            <v-card-title style="padding:0; font-size: 30px; font-weight: bold;">
              GET A FREE ESTIMATE
            </v-card-title>
            <v-btn variant="outlined" class="contactToday">Contact Today</v-btn>
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

export default{
  data() {
    return{
      defaultImage: InterviewBuilder,
      logo100k: logo100k,
      service1: service1,
      service2: service2,
      service3: service3,
    }
  },
  methods:{
    navClicks(){
      getElementById("box"); element. scrollIntoView();
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
  padding-top: 32px 
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