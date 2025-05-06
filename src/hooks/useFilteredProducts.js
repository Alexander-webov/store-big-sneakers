// hooks/useFilteredProducts.js
import { useMemo, useEffect, useState } from "react";

export function useFilteredProducts(products) {
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [selectedRange, setSelectedRange] = useState([0, 100]);
    const [allSizes, setAllSizes] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);

    const filteredSneakers = useMemo(() => {
        const EPSILON = 0.5;
        return products.filter((item) => {
            const matchPrices =
                item.price >= selectedRange[0] - EPSILON &&
                item.price <= selectedRange[1] + EPSILON;
            const matchSizes =
                selectedSizes.length === 0 ||
                item.sizes.some((el) => selectedSizes.includes(el));
            return matchPrices && matchSizes;
        });
    }, [selectedRange, products, selectedSizes]);

    useEffect(() => {
        if (products.length > 0) {
            const prices = products.map((item) => item.price);
            const min = Math.min(...prices);
            const max = Math.max(...prices);
            setPriceRange([min, max]);
            setSelectedRange([min, max]);
        }
    }, [products]);

    useEffect(() => {
        if (filteredSneakers.length) {
            const sizes = Array.from(
                new Set(filteredSneakers.flatMap((product) => product.sizes))
            );
            setAllSizes(sizes);
        }
    }, [filteredSneakers]);

    return {
        priceRange,
        selectedRange,
        setSelectedRange,
        allSizes,
        selectedSizes,
        setSelectedSizes,
        filteredSneakers,
    };
}
