export default function handler(req,res) {
    const getData = async () => {
        const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/Listings/Latest?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}`,
        {
            method: 'GET',
            headers: {
                Accept: '*/*'
            },
        },
        )

        const data = await response.json()

        res.status(200).json({data})
    }

    getData()
}