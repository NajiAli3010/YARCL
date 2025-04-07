import React from 'react'
import { Label } from "@/components/ui/Label"
import { Checkbox } from "@/components/ui/Checkbox"

const LabelExample = () => {
    return (
        <div>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
        </div>
    )
}

export default LabelExample