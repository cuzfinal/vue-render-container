import { h } from 'vue'

const RenderContainer = {
  name: 'RenderContainer',
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

export default RenderContainer;
