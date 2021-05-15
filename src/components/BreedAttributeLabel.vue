<template>
    <div>
        <span class="name">
            {{name}}: 
        </span>
        <div class="levels">
            <span v-for="n in 5" :key="n" class="level" :class="{filled : n  <= level}"></span>
        </div>
    </div>
  
</template>

<script>
export default {
    props:  {
        name: String,
        level: Number
    }
}
</script>

<style>
div {
    display: block
}
.name {
    font-weight: bold;
    width: 50px;
    text-align: left;
}

.levels {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.level {
    margin: 0 5px;
    width: 60px;
    height: 20px;
    background-color: red;
    border: none;
}

.filled {
    background-color: pink;
}
</style>