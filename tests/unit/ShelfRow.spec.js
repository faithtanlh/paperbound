import { mount } from "@vue/test-utils";
import ShelfRow from "../../src/components/ShelfRow.vue";

test("ShelfRow three slots", () => {
  const wrapper = mount(ShelfRow, {
    slots: {
      first: "<div>First</div>",
      second: "<div>Second</div>",
      third: "<div>Third</div>",
    },
  });

  expect(wrapper.html()).toContain("<div>First</div>");
  expect(wrapper.html()).toContain("<div>Second</div>");
  expect(wrapper.html()).toContain("<div>Third</div>");
});
