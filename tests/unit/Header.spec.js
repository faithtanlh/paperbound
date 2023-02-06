import { mount } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";

test("is a Vue instance", () => {
  const mockRoute = {
    params: {
      name: "mock",
    },
  };

  const wrapper = mount(Header, {
    global: {
      mocks: {
        $route: mockRoute,
      },
    },
  });

  expect(wrapper.vm).toBeTruthy();
});

test("emits routing event when logo is clicked", () => {
  const mockRoute = {
    params: {
      name: "mock",
    },
  };

  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = mount(Header, {
    global: {
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
      },
    },
  });

  wrapper.find("img").trigger("click");

  expect(mockRouter.push).toHaveBeenCalledWith({ path: "/" });
});
