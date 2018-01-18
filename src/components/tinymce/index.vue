<template>
  <div>
    <textarea :id= "Id"></textarea>
  </div>
</template>

<script>
import "./langs/zh_CN";
export default {
  data() {
    const Id = Date.now(); // 简单写了个uuid， 实际项目请自行调整
    return {
      Id: Id,
      Editor: null,
      Selector: `#${Id}`
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    window.tinymce.remove(this.Selector); // 切记要销毁
  },
  props: {
    value: {
      type: String
    }
  },
  methods: {
    init() {
      let self = this;
      this.Editor = window.tinymce.init({
        selector: self.Selector,
        setup: editor => {
          editor.on("init", function() {
            self.loading = false;
            self.$emit("on-ready");
            editor.setContent(self.value);
          });
          editor.on("input change undo redo", function() {
            console.log(editor.getContent());
            self.$emit("input", editor.getContent());
          });
        }
      });
    }
  }
};
</script>