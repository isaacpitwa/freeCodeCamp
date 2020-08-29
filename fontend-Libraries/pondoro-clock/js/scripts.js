@font-face {
    font-family: "Digital";
    src: url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot");
    src: url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff") format("woff"), url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7") format("svg");
  }
  
  body {
    background: #1E555C;
    color: white;
    font-size: 30px;
    text-align: center;
    font-family: 'Righteous';
    #container {
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      .main-title {
        font-size: 50px;
        margin-bottom: 20px;
      }
      .length-control {
        width: 250px;
      }
      button {
        background: none;
        outline: none;
        border: none;
        color: white;
        cursor: pointer;
      }
      .btn-level,
      .length-control {
        display: inline-block;
        .btn-level:nth-child(3) {
          width: 40px;
        }
      }
      .timer {
        border: 7px solid #13353a;
        margin: 20px auto 10px auto;
        width: 270px;
        height: 160px;
        border-radius: 50px;
        position: relative;
        .timer-wrapper {
          position: absolute;
          width: 190px;
          height: 110px;
          left: 50%;
          top: 50%;
          margin-left: -95px;
          margin-top: -57px;
        }
        #time-left {
          font-family: digital;
          font-size: 80px;
        }
        .timer-control button:active {
          color: #13353a;
        }
      }
    }
  }
  
  @media screen and (max-width: 500px) {
    #container {
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
      -moz-transform: scale(0.8);
      -ms-transform: scale(0.8);
      -o-transform: scale(0.8);
    }
  }
  
  .author {
    text-align: center;
    font-family: Share Tech Mono, sans;
    margin-top: 15px;
    font-size: 14px;
    color: #a50d0d;;
    a {
      text-decoration: none;
      color: #00264d;
      line-height: 26px;
    }
  }
  