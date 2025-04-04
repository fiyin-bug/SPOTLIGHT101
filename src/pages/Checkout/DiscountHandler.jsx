import { useState, useEffect, useMemo } from "react"
import { Check, X } from "lucide-react"
import PropTypes from 'prop-types'

function DiscountHandler({ referralCode, originalTotal, onDiscountApplied }) {
  const [isValidCode, setIsValidCode] = useState(false)
  const [message, setMessage] = useState("")

  // List of valid referral codes
  const validReferralCodes = useMemo(() => [
    "DAMI",
    "STB",
    "CODEDTINS",
    "KINGTIFE01",
    "DARA",
    "ORE",
    "MONNIE",
    "GUS",
    "HXC",
    "FINNIE",
    "TUZO1960",
    "JIGGY1536",
    "VASTIFE",
    "VEENA",
    "NENYE",
    "ZARA",
    "RYANXGABBY",
    "NXD",
    "KAMAL",
    "AZANAT",
    "MRMORALE53",
    "MISHAEL007",
    "JOE4REAL",
    "NAGOD",
    "VAST",
    "ICEY",
    "ADEDOYINPR",
    "AYO",
    "DOYIN",
    "BLACK",
    

  ], [])

  useEffect(() => {
    if (!referralCode) {
      setIsValidCode(false)
      setMessage("")
      onDiscountApplied(0)
      return
    }

    const code = referralCode.toUpperCase().trim(); // Ensure code is uppercase and trimmed
    const isValid = validReferralCodes.includes(code)

    setIsValidCode(isValid)

    if (isValid) {
      const discountRate = 0.05 // 5% discount
      const discountAmount = originalTotal * discountRate
      setMessage("Referral code applied successfully!")
      onDiscountApplied(discountAmount)
    } else {
      setMessage("Invalid referral code.")
      onDiscountApplied(0)
    }
  }, [referralCode, originalTotal, onDiscountApplied, validReferralCodes])

  if (!referralCode) {
    return null
  }

  return (
    <div
      className={`p-4 rounded-lg ${isValidCode ? "bg-green-900 bg-opacity-20 border border-green-500" : "bg-red-900 bg-opacity-20 border border-red-500"}`}
    >
      <div className="flex items-center">
        {isValidCode ? <Check className="h-5 w-5 text-green-500 mr-2" /> : <X className="h-5 w-5 text-red-500 mr-2" />}
        <p className={`text-sm ${isValidCode ? "text-green-400" : "text-red-400"}`}>{message}</p>
      </div>

      {isValidCode && <p className="text-white text-sm mt-2">You received a 5% discount!</p>}
    </div>
  )
}

DiscountHandler.propTypes = {
  referralCode: PropTypes.string,
  originalTotal: PropTypes.number.isRequired,
  onDiscountApplied: PropTypes.func.isRequired
}

export default DiscountHandler

