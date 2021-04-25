module.exports=`
type DaysData{
    volume: String,
    price_change: String,
    price_change_pct: String,
    volume_change: String,
    volume_change_pct: String,
    market_cap_change: String,
    market_cap_change_pct:String
}
type ApiData{
    id:String,
    currency:String,
    symbol:String,
    name:String,
    logo_url:String,
    status:String,
    price:String,
    price_date:String,
    price_timestamp:String,
    circulating_supply:String,
    market_cap:String,
    num_exchanges:String,
    num_pairs:String,
    num_pairs_unmapped:String,
    first_candle:String,
    first_trade:String,
    first_order_book:String,
    rank:String,
    rank_delta:String,
    high:String,
    high_timestamp:String,
    ytd:DaysData,
    d1:DaysData,
    d7:DaysData,
    d365:DaysData,
    d30:DaysData,
}
type coinsData{
    id:String,
    uuid:String,
}
type VolumeData{
    volume:Float,
    price_change: Float,
    price_change_pct:Float,
    volume_change: Float,
    volume_change_pct: Float,
    market_cap_change: Float,
    market_cap_change_pct: Float
}
type Query{
    getData(id:String):ApiData
    getDataById(uuid:String):ApiData
}
type Mutation{
    createData( id:String!):coinsData
}
`