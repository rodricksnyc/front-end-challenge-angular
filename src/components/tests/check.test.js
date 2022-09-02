import { render, screen } from "@testing-library/react";
import AddressCard from "../AddressCard";

describe("test address boxes", () => {
  it("should have a length greater than 0", () => {
    render(<AddressCard />);
    const addressDiv = screen.getByTestId("check-length");
    expect(addressDiv.childElementCount).toBeGreaterThan(0);
  });

  it("should contain all address information, street, city, state, zip code, phone", async () => {
    render(<AddressCard />);
    const street = await screen.findAllByText(/street/i);
    const city = await screen.findAllByText(/city/i);
    const state = await screen.findAllByText(/state/i);
    const zipCode = await screen.findAllByText(/zip code/i);
    const phone = await screen.findAllByText(/phone/i);

    for (let i = 0; i <= 14; i++) {
      expect(street[i]).toBeInTheDocument();
      expect(city[i]).toBeInTheDocument();
      expect(state[i]).toBeInTheDocument();
      expect(zipCode[i]).toBeInTheDocument();
      expect(phone[i]).toBeInTheDocument();
    }
  });
});
