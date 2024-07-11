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
  ReadingAndLiteraryCriticism: number
  Expression: number
  EnglishLanguage: number
  InformationTechnology: number
  Statistics: number
  History: number
  Geography: number
  Psycology: number
  Sociology: number
  Philosophy: number
}

const Literary = () => {
  const { register, handleSubmit } = useForm<ISubjects>()
  const onSubmit: SubmitHandler<ISubjects> = (event) => {
    let sumOfDegrees = 0
    let percentage = 0
    let appreciation = ''
    let fail = []
    let failFooter = ''

    sumOfDegrees += Ceil(event.TwoSemesters) | 0
    sumOfDegrees += Ceil((event.IslamicEducation / 56) * 56) | 0
    sumOfDegrees += Ceil((event.LinguisticStudies / 39) * 78) | 0
    sumOfDegrees += Ceil((event.LiteraryStudies / 48) * 53) | 0
    sumOfDegrees += Ceil((event.ReadingAndLiteraryCriticism / 44) * 45) | 0
    sumOfDegrees += Ceil(event.Expression / 1) | 0
    sumOfDegrees += Ceil((event.EnglishLanguage / 56) * 140) | 0
    sumOfDegrees += Ceil((event.InformationTechnology / 56) * 56) | 0
    sumOfDegrees += Ceil((event.Statistics / 56) * 56) | 0
    sumOfDegrees += Ceil((event.History / 56) * 84) | 0
    sumOfDegrees += Ceil((event.Geography / 56) * 84) | 0
    sumOfDegrees += Ceil((event.Psycology / 56) * 56) | 0
    sumOfDegrees += Ceil((event.Sociology / 56) * 56) | 0
    sumOfDegrees += Ceil((event.Philosophy / 56) * 84) | 0
    percentage = parseFloat(((sumOfDegrees / 1240) * 100).toFixed(3))

    event.IslamicEducation < 28 ? fail.push('التربية الإسلامية') : ''
    if (
      (event.LinguisticStudies / 39) * 78 +
        (event.LiteraryStudies / 48) * 53 +
        (event.ReadingAndLiteraryCriticism / 44) * 45 +
        (event.Expression / 1) <
      98
    ) {
      if (event.LinguisticStudies < 20) {
        fail.push('الدراسات اللغوية')
      }
      if (event.LiteraryStudies < 24) {
        fail.push('الدراسات الأدبية')
      }
      if (event.ReadingAndLiteraryCriticism < 22) {
        fail.push('المطالعة و النقد الأدبي')
      }
      if (event.Expression < 10) {
        fail.push('التعبير')
      }
    }
    event.EnglishLanguage < 28 ? fail.push('اللغة الانجليزية') : ''
    event.InformationTechnology < 28 ? fail.push('تقنية المعلومات') : ''
    event.Statistics < 28 ? fail.push('الإحصاء') : ''
    event.History < 28 ? fail.push('التاريخ') : ''
    event.Geography < 28 ? fail.push('الجغرافيا') : ''
    event.Psycology < 28 ? fail.push('علم النفس') : ''
    event.Sociology < 28 ? fail.push('علم الاجتماع') : ''
    event.Philosophy < 28 ? fail.push('الفلسفة') : ''

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
            max={372}
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
            max={39}
          />
          <SubjectInput
            register={register('LiteraryStudies')}
            subjectEnglishName="LiteraryStudies"
            subject="الدراسات الأدبية"
            max={48}
          />
          <SubjectInput
            register={register('ReadingAndLiteraryCriticism')}
            subjectEnglishName="ReadingAndLiteraryCriticism"
            subject="المطالعة و النقد الأدبي"
            max={44}
          />
          <SubjectInput
            register={register('Expression')}
            subjectEnglishName="Expression"
            subject="الإنشاء"
            max={20}
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
            register={register('Statistics')}
            subjectEnglishName="Statistics"
            subject="الإحصاء"
            max={56}
          />
          <SubjectInput
            register={register('History')}
            subjectEnglishName="History"
            subject="التاريخ"
            max={56}
          />
          <SubjectInput
            register={register('Geography')}
            subjectEnglishName="Geography"
            subject="الجغرافيا"
            max={56}
          />
          <SubjectInput
            register={register('Psycology')}
            subjectEnglishName="Psycology"
            subject="علم النفس"
            max={56}
          />
          <SubjectInput
            register={register('Sociology')}
            subjectEnglishName="Sociology"
            subject="علم الاجتماع"
            max={56}
          />
          <SubjectInput
            register={register('Philosophy')}
            subjectEnglishName="Philosophy"
            subject="الفلسفة"
            max={56}
          />
        </div>
        <button
          type="submit"
          className="p-4 m-8 block mx-auto rounded-lg text-white font-bold bg-blue-500 hover:bg-blue-600 border border-yellow-900"
        >
          احسب النسبة
        </button>
      </form>
    </>
  )
}

export default Literary
