import { mount } from "@vue/test-utils";
import SearchBar from "../../src/components/SearchBar.vue";

test("SearchBar emits update model value event with model value upon emitted input event", async () => {
  const wrapper = mount(SearchBar);

  await wrapper.setProps({ modelValue: "Hello" });

  wrapper.find("input").trigger("input");

  expect(wrapper.emitted()).toHaveProperty("update:modelValue");
  expect(wrapper.emitted("update:modelValue")[0]).toEqual(["Hello"]);
});
