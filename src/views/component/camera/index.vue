<template>
  <!-- Tutorials: fossheim.io -->
  <div class="camera-wrap-container">
    <div class="sardina">
      <div class="body">
        <div class="wheel left">
          <div class="shutter" />
        </div>
        <div class="wheel right" />
        <div class="viewfinder-container">
          <div class="viewfinder" />
        </div>
        <div class="screw left" />
        <div class="screw right" />
        <div class="decoration">
          <div class="lens">
            <div class="plaque">
              <div class="plastic">
                <div class="glass">
                  <div class="reflection" />
                </div>
              </div>
              <div class="button left" />
              <div class="button right" />
            </div>
          </div>
        </div>
      </div>
      <div class="flash">
        <div class="stick">
          <div class="decoration" />
          <div class="light">
            <div class="screen">
              <div class="middle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang='scss'>
.camera-wrap-container {
  min-height: calc(100vh - 50px);
  overflow: hidden;
  background-color: #66c8b0;
  background-image: radial-gradient(#66bcc8, transparent);
}

.sardina {
  display: block;
  width: 475px;
  height: 264px;
  margin: 333px auto 75px auto;
  position: relative;
}

.body {
  margin-left: -100px;
  display: block;
  width: 475px;
  height: 264px;
  background-color: #f6efe5;
  border-radius: 50px;
  box-shadow: 0 1px 1px rgba(100, 93, 87, 0.4) inset,
    0 0 1px 2px rgba(255, 250, 244, 0.7) inset, 0 -2px 2px #ebe4da inset,
    0px 40px 40px -40px rgba(0, 0, 0, 0.3);
  position: relative;
}

.decoration {
  background-color: #f23038;
  background-image: linear-gradient(
      30deg,
      #e7d9ce 12%,
      transparent 12.5% 87%,
      #e7d9ce 87.5%
    ),
    linear-gradient(150deg, #e7d9ce 12%, transparent 12.5% 87%, #e7d9ce 87.5%),
    linear-gradient(30deg, #e7d9ce 12%, transparent 12.5% 87%, #e7d9ce 87.5%),
    linear-gradient(150deg, #e7d9ce 12%, transparent 12.5% 87%, #e7d9ce 87.5%),
    linear-gradient(60deg, #302627 25%, transparent 25.5% 75%, #302627 75%),
    linear-gradient(60deg, #302627 25%, transparent 25.5% 75%, #302627 75%); /* F23038, 302627 */
  background-size: 40px 70px;
  background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;
}

.sardina .body .decoration {
  display: block;
  width: 425px;
  height: 215px;
  position: absolute;
  top: 24.5px;
  left: 25px;
  border-radius: 35px;
  box-shadow: 0 0.5px 2px 1px rgba(44, 34, 33, 0.5) inset,
    0 0.5px 8px 1px rgba(44, 34, 33, 0.1) inset, 0 0 2px #fffaf4;
}

.flash {
  display: block;
  width: 275px;
  height: 470px;
  position: absolute;
  right: -95px;
  bottom: 60px;
}

.stick {
  display: block;
  width: 115px;
  height: 225px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #f7f0e8;
  border-radius: 4px;
  box-shadow: 0 -1px 2px #ece3dc inset, 0 0 1px 1px #f2f1ec inset,
    0 0 0.5px #998e72;
}

.sardina .flash .decoration {
  display: block;
  width: 75px;
  height: 200px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  box-shadow: 0 0.5px 2px 0.5px #ca422b inset, 0 0 2px #fffaf4;
}

.light {
  display: block;
  width: 275px;
  height: 275px;
  background-color: #fbf6f0;
  border-radius: 150px;
  position: absolute;
  left: -80px;
  top: -245px;
  box-shadow: 0 95px 20px -80px rgba(55, 45, 45, 0.3), 0 0 3px #dad5d1 inset,
    2px 0 2px #fbf4ec inset;
}

.screen {
  display: block;
  position: absolute;
  top: 22px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 230px;
  height: 230px;
  border-radius: 115px;
  background-image: linear-gradient(
    #fffffd 45%,
    #ddd7d7 60% 65%,
    #ebe3e1 79% 90%,
    #e1dcd8 95% 100%
  );
  background-size: 6px 6px;
  box-shadow: 0 0 3px #dfdcd7 inset, 0 0 2px -1px #97928e inset,
    -0.5px 0 0.5px #97928e inset, 0 2px 3px -1px #fefefc;
}

.middle {
  display: block;
  position: absolute;
  width: 145px;
  height: 95px;
  background-color: red;
  margin-left: auto;
  margin-right: auto;
  top: 67.5px;
  left: 0;
  right: 0;
  border-radius: 1px;
  box-shadow: -0.5px 0 1px 1.5px #fffbfa;
  background-image: linear-gradient(
      90deg,
      #fcf7f3 33%,
      rgba(164, 163, 161, 0.15) 33% 66%,
      transparent 66%
    ),
    linear-gradient(
      #fffbf8,
      #fffbf7,
      #fffcf8 10%,
      #ece2d9,
      #dbd1d2,
      #e7ddd4,
      #f8ebe3,
      #fbf2eb,
      #f7eee9,
      #f7f2ef,
      #fcf8f5,
      #eee9e3 80%,
      #dcd8d5 84% 85%,
      #fff9f6 90%
    );
  background-size: 5px 5px, 100% 100%;
}

.lens {
  display: block;
  width: 200px;
  height: 200px;
  background-color: #f1e8e1;
  border-radius: 100px;
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 5px 40px -10px rgba(60, 6, 0, 0.4);
}

.plaque {
  display: block;
  width: 185px;
  height: 185px;
  background-color: #d9d3d3;
  border-radius: 100px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
  box-shadow: 0 0 1px 1.5px #d1cac2, 0 0.5px 2px #f9f4f1 inset,
    0 1.5px 2px #b9b4b0 inset;
}

.plastic {
  display: block;
  width: 110px;
  height: 110px;
  border-radius: 60px;
  background-color: #f4f0ed;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  box-shadow: 0 -0.5px 1px 0.5px #2a110a, 0 -0.5px 1px 0.25px #bdb8b2 inset,
    0 1px 1px 0.5px #ecdacc inset;
}

.glass {
  display: block;
  background-color: #1f1317;
  width: 95px;
  height: 95px;
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.15) 50%,
      transparent
    ),
    radial-gradient(
      #39312f 7%,
      #524a48 10%,
      #2b2321 14%,
      #342c2a,
      #2d2523 28%,
      #373232 33%,
      #241c19 35%,
      #463c3b,
      #2a221f,
      #3f3534,
      #140a09 45% 46%,
      #837978 46.5% 47%,
      #444243 47.5% 48%,
      #191718 50%,
      #3d3938,
      #211b1d,
      #2f2929,
      #1f1317 65%
    );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 -10px, center center;
}

.reflection {
  display: block;
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 27px;
  border-radius: 20px;
  background-image: radial-gradient(
      rgba(245, 245, 245, 0.1) 55%,
      transparent 65%
    ),
    radial-gradient(rgba(245, 245, 245, 0.03), rgba(245, 245, 245, 0.08));
  background-repeat: repeat-x, repeat;
  background-position: -20px -15px, center center;
  background-size: 100% 100%;
}

.button {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 10px;
  background-image: radial-gradient(
      rgba(243, 242, 238, 0.95) 55%,
      transparent 70%
    ),
    linear-gradient(#937b6f, #55321e 20%, transparent 20%),
    radial-gradient(#cfc2b2 15%, #a38f84 17% 20%, #d8c8bb 25%, #cec0b5);
  background-size: 10px 10px, 100% 100%, 100% 100%;
  background-repeat: repeat-x, no-repeat, no-repeat;
  background-position: -12px -2px, center center, center center;
  box-shadow: 0.5px 0.5px 1px #fff6f2 inset, -0.5px -0.5px 2px #8f7e76 inset;
  position: absolute;
  top: 47%;
}

.button.left {
  left: 10px;
}

.button.right {
  right: 12px;
}

.wheel.left {
  display: block;
  width: 81px;
  height: 30px;
  position: absolute;
  top: -30px;
  left: 35px;
  border-radius: 3px 3px 0 0;
  background-image: linear-gradient(90deg, #e3dfd4, #f7f1e5 33% 75%, #e4dace);
  box-shadow: 0 1.5px 1px -1px #aca39e, 0 10px 2px -9.5px #715d4b;
}

.wheel.left:after {
  content: '';
  display: block;
  width: 91px;
  height: 16px;
  background-color: red;
  position: relative;
  left: -5px;
  top: 5px;
  border-radius: 2px 2px 6px 6px;
  background-image: linear-gradient(
      90deg,
      rgba(245, 242, 237, 0.75) 20%,
      transparent
    ),
    linear-gradient(transparent 80%, #e3d3c4),
    linear-gradient(90deg, #ece7e1, #f5f1e8, #ebe4dc);
  background-size: 100% 100%, 100% 100%, 5px 5px;
}

.wheel.right {
  display: block;
  width: 62px;
  height: 28px;
  position: absolute;
  top: -28px;
  right: 60px;
  border-radius: 5px 5px 0 0;
  background-image: linear-gradient(90deg, #f1e6e0, #ece5df 33% 75%, #d1c3b8);
  box-shadow: 0 1.5px 1px -1px #aca39e, 0 10px 2px -9.5px #715d4b;
}

.wheel.right:after {
  content: '';
  display: block;
  width: 70px;
  height: 16px;
  background-color: red;
  position: relative;
  left: -4px;
  top: 5px;
  border-radius: 3px 3px 6px 6px;
  background-image: linear-gradient(
      90deg,
      rgba(245, 242, 237, 0.75) 50%,
      transparent
    ),
    linear-gradient(transparent 70%, #e6d6c7),
    linear-gradient(90deg, #f5f2ed 40%, #f8f1eb 45% 55%, #e8ded5 65%);
  background-size: 100% 100%, 100% 100%, 5px 5px;
}

.shutter {
  display: block;
  width: 30px;
  height: 15px;
  background-color: black;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: -15px;
  border-radius: 4px 4px 0 0;
  background-image: linear-gradient(
    90deg,
    #0f0a06 10%,
    #343537 20% 35%,
    #16110b 45% 55%,
    #3a3537 65% 75%,
    #3a2f29 80% 90%,
    #17130f
  );
}

.viewfinder-container {
  display: block;
  width: 75px;
  height: 40px;
  background-color: #f3eee8;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: -40px;
  box-shadow: 0 -4px 4px -3px rgba(209, 200, 191, 0.75) inset,
    -1.5px 0 2px -2px #deddd9 inset, 1.5px 0 2px -2px #deddd9 inset,
    4px 0 4px -5px #f6f3ee inset, -4px 0 4px -5px #f6f3ee inset;
}

.viewfinder {
  display: block;
  width: 50px;
  height: 30px;
  background-color: red;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 4px;
  border-radius: 1px;
  background-image: radial-gradient(
      rgba(245, 245, 245, 0.5),
      rgba(245, 245, 245, 0.1) 50%
    ),
    radial-gradient(rgba(176, 138, 99, 0.75) 45%, transparent 50%),
    radial-gradient(
      #7e6c62,
      #a89181,
      #150d0a,
      #2d231a,
      #2b1d14 28% 33%,
      #ab9387 35% 36%,
      #715c50 38% 45%,
      #ab9387 48%,
      transparent 50%
    ),
    radial-gradient(#826857, #6f543f);
  background-size: 100% 128%, 120% 135%, 50px 50px, 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 -10px, -5px -20px, center center, center center;
  box-shadow: 0 1px 1px #604a3c inset, 0 -1px 1px #604a3c inset,
    0 0 1px 1px #fff8eb, -1px 0 1px #2f251c inset, 1px 0 3px #594536 inset,
    0 0 1px 1px #fffdf8;
}

.viewfinder-container:after {
  content: '';
  display: block;
  border-bottom: 28px solid #f3eee8;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  height: 0;
  width: 35px;
  position: absolute;
  top: -28px;
  left: 0px;
}

.screw {
  display: block;
  position: absolute;
  top: -5px;
  width: 15px;
  height: 5px;
  background-image: linear-gradient(90deg, #cac1b8, #fffaee, #d9cbbe, #b5a89f);
  border-radius: 5px 5px 0 0;
  box-shadow: 0.5px 0.5px 1px rgba(48, 38, 32, 0.4) inset,
    0 -1px 1px #afa69d inset;
}

.screw.left {
  left: 180px;
}

.screw.right {
  right: 180px;
}
</style>