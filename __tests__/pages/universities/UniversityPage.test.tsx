import Router from "next/router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockUniversity } from "mocks/mockUniversities";
import UniversityPage from "@/pages/universities/[universityId]";
import RenderWrapper from "mocks/RenderWrapper";
import { getServerSideProps } from "@/pages/universities/[universityId]";

import mockFetch from "jest-fetch-mock";
import { GetServerSidePropsContext } from "next";

mockFetch.enableMocks();

jest.mock("next/router", () => require("next-router-mock"));

Router.pathname = `/universities/${mockUniversity.slug}`;

const mockRouterBack = jest.fn();
Router.back = mockRouterBack;

describe("Given the UniversityPage", () => {
  beforeEach(() => {
    mockFetch.resetMocks();
  });

  describe(`When is rendered with params university/${mockUniversity.slug}`, () => {
    test(`Then it should show a heading level 2 with name ${mockUniversity.name}`, () => {
      const expectedHeadingName = mockUniversity.name;

      render(
        <UniversityPage initialUniversity={mockUniversity} description={""} />,
        {
          wrapper: RenderWrapper,
        }
      );

      const headingName = screen.getByRole("heading", {
        level: 2,
        name: expectedHeadingName,
      });

      expect(headingName).toBeInTheDocument();
    });
  });

  describe(`When is rendered with params university/${mockUniversity.slug} and click on Back button`, () => {
    test("Then the function back of router should be called", async () => {
      const nameButton = "Back";

      render(
        <UniversityPage initialUniversity={mockUniversity} description={""} />,
        {
          wrapper: RenderWrapper,
        }
      );

      const button = screen.getByRole("button", {
        name: nameButton,
      });

      await userEvent.click(button);

      expect(mockRouterBack).toHaveBeenCalled();
    });
  });
});

describe("Given the function getServerSideProps", () => {
  describe("When is called with a valid universityId", () => {
    mockFetch.mockResponseOnce(
      JSON.stringify({
        initialUniversity: mockUniversity,
      })
    );
    test(`Then it should return the university ${mockUniversity.name}`, async () => {
      const context: Partial<
        GetServerSidePropsContext<{ universityId: string }>
      > = {
        params: {
          universityId: mockUniversity.id.toString(),
        },
        query: {},
      };

      const { props } = await getServerSideProps(
        context as GetServerSidePropsContext<{ universityId: string }>
      );
      expect(props).toHaveProperty("initialUniversity", mockUniversity);
      expect(props).toHaveProperty("description");
    });
  });

  describe("When is called with a invalid universityId", () => {
    const expectedResponse = {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };

    mockFetch.mockResponseOnce(
      JSON.stringify({
        expectedResponse,
      })
    );

    test("Then it should return a 404 error and object with a destination page 404", async () => {
      const expectedDestination = "/404";

      const context: Partial<
        GetServerSidePropsContext<{ universityId: string }>
      > = {
        params: {
          universityId: "",
        },
        query: {},
      };

      const { redirect } = await getServerSideProps(
        context as GetServerSidePropsContext<{ universityId: string }>
      );

      expect(redirect).toHaveProperty("destination", expectedDestination);
    });
  });
});
