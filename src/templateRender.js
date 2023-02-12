import { h } from 'vue'

const TemplateRender = {
  name: 'TemplateRender',
  props: {
    render: {
      type: Function,
      required: true,
    },
    params: Array,
  },
  render() {
    return this.render?.(h, ...(this.params || []));
  },
}

export default TemplateRender;
