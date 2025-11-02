import { useQuery } from "@tanstack/react-query";
import { productApi } from "../../../services/api/productApi";
export default function ProductList({ apiEndpoint, Card }) {
  const { data: products, isPending, isError } = useQuery({
    queryKey: ['products', apiEndpoint],
    queryFn: () => productApi(apiEndpoint),
  });
  if (isPending) return <>
    <svg fill="#a72f3b" width={30} height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="12" r="3">
        <animate id="spinner_qFRN" begin="0;spinner_OcgL.end+0.25s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33" /></circle><circle cx="12" cy="12" r="3"><animate begin="spinner_qFRN.begin+0.1s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33" /></circle><circle cx="20" cy="12" r="3"><animate id="spinner_OcgL" begin="spinner_qFRN.begin+0.2s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33" />
      </circle>
    </svg>
  </>;
  if (isError) return <div>ERROR</div>;
  return (
    <>
      {products.map((product) => {
        return <Card isPending key={product.id} {...product} />
      })}
    </>
  )
}
