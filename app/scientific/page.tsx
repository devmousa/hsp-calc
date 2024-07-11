'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

import Swal from 'sweetalert2'

import SubjectInput from '../../components/SubjectInput'
import { Ceil } from '../../utils/Ceil'
import { Appreciation } from '../../utils/Appreciation'

interface ISubjects {
  TwoSemesters: number
  IslamicEducation: number
  LinguisticStudies: number
  LiteraryStudies: number
  Expression: number
  EnglishLanguage: number
  InformationTechnology: number
  Mathematics: number
  Statistics: number
  ElectricalPhysics: number
  MechanicsPhysics: number
  Chemistry: number
  Biology: number
}

const Scientific = () => {
  const { register, handleSubmit } = useForm<ISubjects>()
  const onSubmit: SubmitHandler<ISubjects> = (event) => {
    let sumOfDegrees = 0
    let percentage = 0
    let appreciation = ''
    let fail = []
    let failFooter = ''

    sumOfDegrees += Ceil(event.TwoSemesters) | 0
    sumOfDegrees += Ceil((event.IslamicEducation / 56) * 56) | 0
    sumOfDegrees += Ceil((event.LinguisticStudies / 44) * 44) | 0
    sumOfDegrees += Ceil((event.LiteraryStudies / 44) * 44) | 0
    sumOfDegrees += Ceil(event.Expression / 1) | 0
    sumOfDegrees += Ceil((event.EnglishLanguage / 56) * 112) | 0
    sumOfDegrees += Ceil((event.InformationTechnology / 56) * 56) | 0
    sumOfDegrees += Ceil((event.Mathematics / 56) * 140) | 0
    sumOfDegrees += Ceil((event.Statistics / 56) * 56) | 0
    sumOfDegrees += Ceil((event.ElectricalPhysics / 56) * 84) | 0
    sumOfDegrees += Ceil((event.MechanicsPhysics / 56) * 56) | 0
    sumOfDegrees += Ceil((event.Chemistry / 56) * 112) | 0
    sumOfDegrees += Ceil((event.Biology / 56) * 112) | 0
    percentage = parseFloat(((sumOfDegrees / 1280) * 100).toFixed(3))

    event.IslamicEducation < 28 ? fail.push('التربية الإسلامية') : ''
    if (
      ((event.LinguisticStudies / 44) * 44 +
        (event.LiteraryStudies / 44) * 44 +
        event.Expression / 1) <
      56
    ) {
      if (event.LinguisticStudies < 22) {
        fail.push('الدراسات اللغوية')
      }
      if (event.LiteraryStudies < 22) {
        fail.push('الدراسات الأدبية')
      }
      if (event.Expression < 12) {
        fail.push('التعبير')
      }
    }
    event.EnglishLanguage < 28 ? fail.push('اللغة الإنجليزية') : ''
    event.InformationTechnology < 28 ? fail.push('تقنية المعلومات') : ''
    event.Mathematics < 28 ? fail.push('الرياضيات') : ''
    event.Statistics < 28 ? fail.push('الإحصاء') : ''
    if (
      Ceil((event.ElectricalPhysics / 56) * 84 + (event.MechanicsPhysics / 56) * 56) <
      70
    ) {
      if (event.ElectricalPhysics < 28) {
        fail.push('الفيزياء الكهربائية')
      }
      if (event.MechanicsPhysics < 28) {
        fail.push('الفيزياء الميكانيكا')
      }
    }
    event.Chemistry < 28 ? fail.push('الكيمياء') : ''
    event.Biology < 28 ? fail.push('الأحياء') : ''

    if (isNaN(percentage)) {
      percentage = 0
    }

    appreciation = Appreciation(percentage)

    if (fail.length != 0) {
      appreciation = 'راسب'
      failFooter = `دور ثاني في: ${fail.join(' و ')}`
    }

    Swal.fire({
      title: '%' + percentage,
      html: `نسبتك هي ${percentage}% <br />التقدير: <b>${appreciation}</b><br />${failFooter}`,
      confirmButtonText: 'حسنا',
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-2 flex flex-wrap md:flex-row flex-col md:gap-4 gap-y-4 justify-center md:items-center">
          <SubjectInput
            register={register('TwoSemesters')}
            subjectEnglishName="TwoSemesters"
            subject="مجموع الفترتين"
            max={384}
            sumOfSemesters
          />
          <SubjectInput
            register={register('IslamicEducation')}
            subjectEnglishName="IslamicEducation"
            subject="التربية الإسلامية"
            max={56}
          />
          <SubjectInput
            register={register('LinguisticStudies')}
            subjectEnglishName="LinguisticStudies"
            subject="الدراسات اللغوية"
            max={44}
          />
          <SubjectInput
            register={register('LiteraryStudies')}
            subjectEnglishName="LiteraryStudies"
            subject="الدراسات الأدبية"
            max={44}
          />
          <SubjectInput
            register={register('Expression')}
            subjectEnglishName="Expression"
            subject="التعبير"
            max={24}
            another
          />
          <SubjectInput
            register={register('EnglishLanguage')}
            subjectEnglishName="EnglishLanguage"
            subject="اللغة الإنجليزية"
            max={56}
          />
          <SubjectInput
            register={register('InformationTechnology')}
            subjectEnglishName="InformationTechnology"
            subject="تقنية المعلومات"
            max={56}
          />
          <SubjectInput
            register={register('Mathematics')}
            subjectEnglishName="Mathematics"
            subject="الرياضيات"
            max={56}
          />
          <SubjectInput
            register={register('Statistics')}
            subjectEnglishName="Statistics"
            subject="الإحصاء"
            max={56}
          />
          <SubjectInput
            register={register('ElectricalPhysics')}
            subjectEnglishName="ElectricalPhysics"
            subject="الفيزياء الكهربائية"
            max={56}
          />
          <SubjectInput
            register={register('MechanicsPhysics')}
            subjectEnglishName="MechanicsPhysics"
            subject="الميكانيكا"
            max={56}
          />
          <SubjectInput
            register={register('Chemistry')}
            subjectEnglishName="Chemistry"
            subject="الكيمياء"
            max={56}
          />
          <SubjectInput
            register={register('Biology')}
            subjectEnglishName="Biology"
            subject="الأحياء"
            max={56}
          />
        </div>
        <button
          type="submit"
          className="p-4 m-8 block mx-auto rounded-lg text-white font-bold bg-blue-500 hover:bg-blue-600  border border-yellow-900"
        >
          احسب النسبة
        </button>
      </form>
    </>
  )
}

export default Scientific
