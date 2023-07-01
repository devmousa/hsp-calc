'use client'

import { useForm, SubmitHandler } from "react-hook-form"

import Swal from 'sweetalert2'

import SubjectInput from "../../components/SubjectInput"
import { Ceil } from "../../utils/Ceil"
import { Appreciation } from "../../utils/Appreciation"

interface ISubjects {
  TwoSemesters: number,
  IslamicEducation: number,
  LinguisticStudies: number,
  LiteraryStudies: number,
  Expression: number,
  EnglishLanguage: number,
  InformationTechnology: number,
  Mathematics: number,
  Statistics: number,
  ElectricalPhysics: number,
  MechanicsPhysics: number,
  Chemistry: number,
  Biology: number
}

const Scientific = () => {
  const { register, handleSubmit } = useForm<ISubjects>()
  const onSubmit: SubmitHandler<ISubjects> = (event) => {
    let sumOfDegrees = 0
    let percentage = 0
    let appreciation = ""
    let fail = []
    let failFooter = ""

    sumOfDegrees += Ceil(event.TwoSemesters) | 0
    sumOfDegrees += Ceil(event.IslamicEducation/48*56) | 0
    sumOfDegrees += Ceil(event.LinguisticStudies/48*44) | 0
    sumOfDegrees += Ceil(event.LiteraryStudies/48*44) | 0
    sumOfDegrees += Ceil(event.Expression) | 0
    sumOfDegrees += Ceil(event.EnglishLanguage/60*112) | 0
    sumOfDegrees += Ceil(event.InformationTechnology/48*56) | 0
    sumOfDegrees += Ceil(event.Mathematics/60*140) | 0
    sumOfDegrees += Ceil(event.Statistics/48*56) | 0
    sumOfDegrees += Ceil(event.ElectricalPhysics/60*84) | 0
    sumOfDegrees += Ceil(event.MechanicsPhysics/60*56) | 0
    sumOfDegrees += Ceil(event.Chemistry/60*112) | 0
    sumOfDegrees += Ceil(event.Biology/60*112) | 0
    percentage = parseFloat((sumOfDegrees/1280*100).toFixed(3))

    event.IslamicEducation < 24 ? fail.push("التربية الإسلامية") : ""
    if (event.LinguisticStudies/48*44 + event.LiteraryStudies/48*44 + event.Expression < 56){
      if (event.LinguisticStudies < 24){
        fail.push("الدراسات اللغوية")
      }
      if (event.LiteraryStudies < 24){
        fail.push("الدراسات الأدبية")
      }
      if (event.Expression < 12){
        fail.push("التعبير")
      }
    }
    event.EnglishLanguage < 30 ? fail.push("اللغة الإنجليزية") : ""
    event.InformationTechnology < 24 ? fail.push("تقنية المعلومات") : ""
    event.Mathematics < 30 ? fail.push("الرياضيات") : ""
    event.Statistics < 24 ? fail.push("الإحصاء") : ""
    if (event.ElectricalPhysics/60*84 + event.MechanicsPhysics/60*56 < 70){
      if (event.ElectricalPhysics < 30){
        fail.push("الفيزياء الكهربائية")
      }
      if (event.MechanicsPhysics < 30){
        fail.push("الفيزياء الميكانيكا")
      }
    }
    event.Chemistry < 30 ? fail.push("الكيمياء") : ""
    event.Biology < 30 ? fail.push("الأحياء") : ""

    
    if(isNaN(percentage)){
      percentage = 0
    }

    appreciation = Appreciation(percentage)

    if (fail.length != 0){
      appreciation = "راسب"
      failFooter = `دور ثاني في: ${fail.join(" و ")}`
    }

    Swal.fire({
      title: "%" + percentage,
      html: `نسبتك هي ${percentage}% <br />التقدير: <b>${appreciation}</b><br />${failFooter}`,
      confirmButtonText: "حسنا"
    })

  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-2 flex flex-wrap md:flex-row flex-col md:gap-4 gap-y-4 justify-center md:items-center">
          <SubjectInput register={register("TwoSemesters")} subjectEnglishName="TwoSemesters" subject="مجموع الفترتين" max={384} sumOfSemesters={true} />
          <SubjectInput register={register("IslamicEducation")} subjectEnglishName="IslamicEducation" subject="التربية الإسلامية" max={48} />
          <SubjectInput register={register("LinguisticStudies")} subjectEnglishName="LinguisticStudies" subject="الدراسات اللغوية" max={48} />
          <SubjectInput register={register("LiteraryStudies")} subjectEnglishName="LiteraryStudies" subject="الدراسات الأدبية" max={48} />
          <SubjectInput register={register("Expression")} subjectEnglishName="Expression" subject="التعبير" max={24} expressionsSubject={true} />
          <SubjectInput register={register("EnglishLanguage")} subjectEnglishName="EnglishLanguage" subject="اللغة الإنجليزية" max={60} />
          <SubjectInput register={register("InformationTechnology")} subjectEnglishName="InformationTechnology" subject="تقنية المعلومات" max={48} />
          <SubjectInput register={register("Mathematics")} subjectEnglishName="Mathematics" subject="الرياضيات" max={60} />
          <SubjectInput register={register("Statistics")} subjectEnglishName="Statistics" subject="الإحصاء" max={48} />
          <SubjectInput register={register("ElectricalPhysics")} subjectEnglishName="ElectricalPhysics" subject="الفيزياء الكهربائية" max={60} />
          <SubjectInput register={register("MechanicsPhysics")} subjectEnglishName="MechanicsPhysics" subject="الميكانيكا" max={60} />
          <SubjectInput register={register("Chemistry")} subjectEnglishName="Chemistry" subject="الكيمياء" max={60} />
          <SubjectInput register={register("Biology")} subjectEnglishName="Biology" subject="الأحياء" max={60} />
        </div>
        <button type="submit" className="p-4 m-8 block mx-auto rounded-lg bg-yellow-300 hover:bg-yellow-400 border border-yellow-900">
          احسب النسبة
        </button>
      </form>
    </>
  )
}

export default Scientific
