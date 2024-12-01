export default [
    {
        model: "Model 3",
        buttons: [
            {
                //Cash
                data: 1,
                desc: "Include est. 5-year gas savings of $5,000.",
                buttonsLabel: [
                    {price: "$33,990", label: "Rear-Wheel Drive", on: true, id: 0},
                    {price: "$29,990",label: "Long Range Rear-Wheel Drive", on: false, id: 1},
                    {price: "$34,990",label: "Long Range All-Wheel Drive", on: false, id: 2},
                    {price: "$43,490",label: "Performance All-Wheel Drive", on: false, id: 3}
                ],
                additionalInfo: "",
            },
            {
                //Lease
                data: 2,
                desc: "Include est. gas savings of $83 /mo.",
                buttonsLabel: [
                    {price: "$216 /mo", label: "Rear-Wheel Drive", on: true, id: 0},
                    {price: "$366 /mo", label: "Long Range All-Wheel Drive", on: false, id: 1},
                    {price: "$566 /mo", label: "Performance All-Wheel Drive", on: false, id: 2}
                ],
                additionalInfo: "$2,999 down, 36 months, 10,000 miles",
            },
            {
                //Finance
                data: 3,
                desc: "Include est. gas savings of $83 /mo.",
                buttonsLabel: [
                    {price: "$527 /mo", label: "Rear-Wheel Drive", on: true, id: 0 },
                    {price: "$481 /mo", label: "Long Range Rear-Wheel Drive", on: false, id: 1 },
                    {price: "$565 /mo", label: "Long Range All-Wheel Drive", on: false, id: 2 },
                    {price: "$691 /mo", label: "Performance All-Wheel Drive", on: false, id: 3 }
                ],
                additionalInfo: "$3,999 (10%) down, 6.29% APR, 72 months",
            }
        ]
    },
    {
        model: "Model Y",
        buttons: [
            {
                //Cash
                data: 1,
                desc: "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,000.",
                buttonsLabel: [
                    {price: "$31,490",label: "Long Range Rear-Wheel Drive", on: true, id: 0},
                    {price: "$34,490",label: "Long Range All-Wheel Drive", on: false, id: 1},
                    {price: "$37,990",label: "Performance All-Wheel Drive", on: false, id: 2}
                ],
                additionalInfo: "",
            },
            {
                //Lease
                data: 2,
                desc: "Include est. gas savings of $100 /mo.",
                buttonsLabel: [
                    {price: "$399 /mo", label: "Long Range All-Wheel Drive", on: true, id: 0},
                    {price: "$499 /mo", label: "Performance All-Wheel Drive", on: false, id: 1}
                ],
                additionalInfo: "$2,999 down, 36 months, 10,000 miles",
            },
            {
                //Finance
                data: 3,
                desc: "Include Federal Tax Credit and gas savings of $225 /mo.",
                buttonsLabel: [
                    {price: "$518 /mo",label: "Long Range Rear-Wheel Drive", on: true, id: 0},
                    {price: "$571 /mo",label: "Long Range All-Wheel Drive", on: false, id: 1},
                    {price: "$632 /mo",label: "Performance All-Wheel Drive", on: false, id: 2}
                ],
                additionalInfo: `$3,999 (8%) down, 1.99% APR, 60 months`
            }
        ]
    }, 
    {
        model: "Model X",
        buttons: [
            {
                //Cash
                data: 1,
                desc: "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,500.",
                buttonsLabel: [
                    {price: "$65,990",label: "All-Wheel Drive", on: true, id: 0},
                    {price: "$88,490",label: "Plaid", on: false, id: 1},
                ],
                additionalInfo: "",
            },
            {
                //Lease
                data: 2,
                desc: "Include est. gas savings of $108 /mo.",
                buttonsLabel: [
                    {price: "$1,101 /mo", label: "All-Wheel Drive", on: true, id: 0},
                    {price: "$1,361 /mo", label: "Plaid", on: false, id: 1}
                ],
                additionalInfo: "$7,500 down, 36 months, 10,000 miles",
            },
            {
                //Finance
                data: 3,
                desc: "Include Federal Tax Credit and gas savings of $212 /mo.",
                buttonsLabel: [
                    {price: "$1,073 /mo", label: "All-Wheel Drive", on: true, id: 0},
                    {price: "$1,426 /mo", label: "Plaid", on: false, id: 1}
                ],
                additionalInfo: `$3,999 (5%) down, 5.99% APR, 72 months`
            }
        ]
    },

    {
        model: "Model S",
        buttons: [
            {
                //Cash
                data: 1,
                desc: "Include est. 5-year gas savings of $6,500.",
                buttonsLabel: [
                    {price: "$65,990",label: "All-Wheel Drive", on: true, id: 0},
                    {price: "$83,490",label: "Plaid", on: false, id: 1},
                ],
                additionalInfo: "",
            },
            {
                //Lease
                data: 2,
                desc: "Include est. gas savings of $108 /mo.",
                buttonsLabel: [
                    {price: "$1,031 /mo", label: "All-Wheel Drive", on: true, id: 0},
                    {price: "$1,281 /mo", label: "Plaid", on: false, id: 1}
                ],
                additionalInfo: "$7,500 down, 36 months, 10,000 miles",
            },
            {
                //Finance
                data: 3,
                desc: "Include est. gas savings of $108 /mo.",
                buttonsLabel: [
                    {price: "$1,094 /mo", label: "All-Wheel Drive", on: true, id: 0},
                    {price: "$1,343 /mo", label: "Plaid", on: false, id: 1}
                ],
                additionalInfo: `$3,999 (5%) down, 5.99% APR, 72 months`
            }
        ]
    }
  
]