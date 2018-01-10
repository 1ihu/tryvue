<template>
        <div>
            <h3>{{$store.state.count}}</h3>
              <div>
                {{count}}
        <button @click="add">+</button>
        <button @click="reduce">-</button>
    </div>
        </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },

  methods: {
    // ...mapMutations(["add", "reduce"])
    // mapMutations(["add", "reduce"])
  },
  computed: {
    // ...mapState(["count"]),
    count() {
      return this.$store.getters.count;
    }
  },
  // computed: mapState({
  //   count: state => state.count //理解为传入state对象，修改state.count属性
  // }),
  created() {
    // console.log(mapState);
  }
};
</script>
