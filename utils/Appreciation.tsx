'use client'

export const Appreciation = (percentage: number) => {
  if(percentage >= 85)
  {
    return "ممتاز"
  }
  else if(percentage >= 75)
  {
    return "جيد جدا"
  }
  else if(percentage >= 65)
  {
    return "جيد"
  }
  else if(percentage >= 50)
  {
    return "مقبول"
  }
  else {
    return "راسب"
  }
}