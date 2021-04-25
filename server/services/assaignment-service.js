const fetch = require('node-fetch');
const database = require('../database');
const helper =require('../utils/helper')
const { Pool,Client} =require('pg');
const uuidv1 = require('uuidv1')
const API_URL = 'https://api.nomics.com/v1/currencies/ticker?key=7e69217413100117711004501a2a5e57&currency=BTC,ETH&ids=BTC,ETH,XRP&page=1&per-page=10'
const pool = new Pool({
  connectionString:process.env.DATABASE_URL,
  multipleStatements: true,
});
const createData= async (data) =>{
    try
    {
      
      let apiRes = await helper.getRequest({url:API_URL})
      let response = [];
      if(apiRes){
        apiRes.data && apiRes.data.map((a) => { 
              if(a.id == data){ response.push(a); }
          });
      }
      else
      {
        return null
      }
      if(response)
      {
        let datesArray=["1d","7d","30d","365d","ytd"];
        let res = await pool.query("select id,idname,uuid from coins where idname=$1",[response[0].id])
        if(res.rowCount>0) //update the database if data already exist
          {
            let uResult =   await pool.query(`update coins set idname =$1,symbol=$2,name=$3,logo_url=$4,status=$5,currency=$6,price=$7,price_date=$8,price_timestamp=$9,circulating_supply=$10,market_cap=$11,num_exchanges=$12,num_pairs=$13,num_pairs_unmapped=$14,first_candle=$15,first_trade=$16,first_order_book=$17,rank=$18,rank_delta=$19,high=$20,high_timestamp=$21 where uuid='${res.rows[0].uuid}'`, 

            [res.rows[0].id, res.rows[0].symbol,res.rows[0].name,res.rows[0].logo_url,res.rows[0].status,res.rows[0].currency,res.rows[0].price,res.rows[0].price_date,res.rows[0].price_timestamp,res.rows[0].circulating_supply,res.rows[0].market_cap,res.rows[0].num_exchanges,res.rows[0].num_pairs,res.rows[0].num_pairs_unmapped,res.rows[0].first_candle,res.rows[0].first_trade,res.rows[0].first_order_book,res.rows[0].rank,res.rows[0].rank_delta,res.rows[0].high,res.rows[0].high_timestamp])
            datesArray.forEach(element => {
              let dResult = pool.query(`update  data_types set days =$1,uuid=$2,volume=$3,price_change=$4,price_change_pct=$5,volume_change=$6,volume_change_pct=$7,market_cap_change=$8,market_cap_change_pct=$9 where uuid='${res.rows[0].uuid}' and days='${element}'`, 
              [element,res.rows[0].uuid,response[0][element].volume, response[0][element].price_change,response[0][element].price_change_pct,response[0][element].volume_change,response[0][element].volume_change_pct,response[0][element].market_cap_change,response[0][element].market_cap_change_pct])
           });

              return res.rows[0];
          }
          else //insert data to database
          {
            try{
              let result =   await pool.query('INSERT into coins (uuid,idname ,symbol,name,logo_url,status,currency,price,price_date,price_timestamp,circulating_supply,market_cap,num_exchanges,num_pairs,num_pairs_unmapped,first_candle,first_trade,first_order_book,rank,rank_delta,high,high_timestamp) VALUES($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22) RETURNING id,uuid', 
                  [uuidv1(),response[0].id, response[0].symbol,response[0].name,response[0].logo_url,response[0].status,response[0].currency,response[0].price,response[0].price_date,response[0].price_timestamp,response[0].circulating_supply,response[0].market_cap,response[0].num_exchanges,response[0].num_pairs,response[0].num_pairs_unmapped,response[0].first_candle,response[0].first_trade,response[0].first_order_book,response[0].rank,response[0].rank_delta,response[0].high,response[0].high_timestamp])
                  if(result){
                     
                     datesArray.forEach(element => {
                        let result1 = pool.query('INSERT into data_types (days,uuid,volume,price_change,price_change_pct,volume_change,volume_change_pct,market_cap_change,market_cap_change_pct) VALUES($1, $2, $3,$4,$5,$6,$7,$8,$9) RETURNING id,uuid', 
                        [element,result.rows[0].uuid,response[0][element].volume, response[0][element].price_change,response[0][element].price_change_pct,response[0][element].volume_change,response[0][element].volume_change_pct,response[0][element].market_cap_change,response[0][element].market_cap_change_pct])
                     });
                     return result.rows[0];
               }
                else{
                    return null
                  }
                }
                catch(err){
                    console.log(err)
                }
          }
      }
  
    }
   catch(error)
    {
      console.log(error)
      return null;
    }

}
const getData = async (data) =>{
  try
  {
    let res = await helper.getRequest({url:API_URL})
    let response = [];
    if(res){
        
        res.data && res.data.map((a) => { 
            if(a.id == data){ response.push(a); }
        });
        if(response[0])
        {
            response[0]["d1"] = response[0]["1d"]
            response[0]["d30"] = response[0]["30d"]
            response[0]["d7"] = response[0]["7d"]
            response[0]["d365"] = response[0]["365d"]
            return response[0]
        }
      
    }
    else
    {
      return null
    }
  }
 catch(error)
  {
    console.log(error)
    return null;
  }

}
const getDataById= async (data) =>{
  try
  {
    let res = await pool.query("select * from coins where uuid=$1",[data])
    if(res.rowCount>0)
    {
      return res.rows[0];
    }
    else
    {
      return null
    }
  }
 catch(error)
  {
    return null;
  }

}

module.exports = {
    createData,
    getData,
    getDataById
  };