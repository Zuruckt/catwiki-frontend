<template>
  <div class="footer">
            <Logo width="128" height="43" color="#fff"></Logo>
            <p>
                <span class="material-icons">
                    copyright
                </span>
                criado por Zuruck | devchallenges.io 2021
            </p>
        </div>
</template>

<script>
import Logo from "./Logo"
export default {
    components: {
        Logo
    }
}
</script>

<style>
.footer {
    background: #000;
    border-radius: 42px 42px 0px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
}
.footer * {
    padding: 20px;
}
.footer p {
    margin: 0
}
</style>