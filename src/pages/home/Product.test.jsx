import { it, expect, describe, vi, beforeEach } from "vitest";
import { Product } from "./Product";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("axios");

describe("Product Component", () => {
  //data for tests
  let product;
  let loadCart;
  let addToCart;
    const user = userEvent.setup();

beforeEach(()=>{ //test hook
  product= {
    keywords: ["socks", "sports", "apparel"],
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    createdAt: "2025-09-21T05:57:07.565Z",
    updatedAt: "2025-09-21T05:57:07.565Z",
  }

  loadCart = vi.fn(); //fake / moke function.
  addToCart = vi.fn();
})

  it("displays the product details correctyly", () => {
    render(<Product product={product} loadCart={loadCart} />);

    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg"
    );

    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();

    expect(screen.getByTestId("rating-image")).toHaveAttribute(
      "src",
      `./src/assets/images/ratings/rating-45.png`
    );

    expect(screen.getByText(`87`)).toBeInTheDocument();

    expect(screen.getByText("$ 10.90")).toBeInTheDocument();
  });


  it("Adds a product to the cart", async () => {

    render(
      <Product product={product} loadCart={loadCart} addToCart={addToCart} />
    );

      // const user = userEvent.setup();
    const addToCartBtn = screen.getByTestId("add-to-cart-btn");
    await user.click(addToCartBtn);
    expect(addToCart).toHaveBeenCalledWith(product, 1);
  });

    it("Adds quantity to the cart", async () => {
        render(
            <Product product={product} loadCart={loadCart} addToCart={addToCart}/>
        )
        const addQuantityBtn = screen.getByTestId("add-quantity-btn");
        expect(addQuantityBtn).toHaveValue("1");
    })
});

