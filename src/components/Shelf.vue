<template>
  <div class="shelf"></div>
</template>

<script>
export default {

}
</script>

<style>
.shelf {
    width: 95vw;
    margin: auto;
	border-bottom: 30px solid #E8DED0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
	z-index: -1;
}

.shelf::before {
    content: "";
    background: #F6F2EB;
    height: 20px;
    width: calc(95vw + 40px);
    transform: translate(-20px, 30px);
    position: absolute;
    box-shadow: 0px -1px 6px rgba(184, 171, 153, 0.10),
      0px 4px 16px rgba(184, 171, 153, 0.25);
}

.shelf::after {
    content: "";
    position: absolute;
    height: 80px;
    width: calc(95vw + 40px);
    transform: translate(-20px, 49px);
    background: linear-gradient(180deg, #B8AB99 0%, #F8F3ED 100%);
    clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 97% 100%, 3% 100%);
    z-index: -1;
    opacity: 0.3;
}
</style>