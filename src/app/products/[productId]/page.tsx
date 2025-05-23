export default async function ProductDetail({
    params,
}:{
    params: Promise<{productId: string}>;
}) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const productId = (await params).productId;
    return <h1>Product Detail for {productId}</h1>;
}