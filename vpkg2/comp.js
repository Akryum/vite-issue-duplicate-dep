const __sfc__ = {}
import { renderSlot as _renderSlot, openBlock as _openBlock, createElementBlock as _createElementBlock } from "@histoire/vendors/vue"

const _hoisted_1 = { class: "slot" }
function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _renderSlot(_ctx.$slots, "default", { color: "green" })
  ]))
}
__sfc__.render = render
__sfc__.__file = "comp.js"
export default __sfc__
