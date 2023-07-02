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
    sumOfDegrees += Ceil((event.IslamicEducation / 48) * 56) | 0
    sumOfDegrees += Ceil((event.LinguisticStudies / 60) * 81) | 0
    sumOfDegrees += Ceil((event.LiteraryStudies / 60) * 50) | 0
    sumOfDegrees += Ceil((event.ReadingAndLiteraryCriticism / 48) * 45) | 0
    sumOfDegrees += Ceil(event.Expression) | 0
    sumOfDegrees += Ceil((event.EnglishLanguage / 60) * 140) | 0
    sumOfDegrees += Ceil((event.InformationTechnology / 48) * 56) | 0
    sumOfDegrees += Ceil((event.Statistics / 48) * 56) | 0
    sumOfDegrees += Ceil((event.History / 60) * 84) | 0
    sumOfDegrees += Ceil((event.Geography / 60) * 84) | 0
    sumOfDegrees += Ceil((event.Psycology / 48) * 56) | 0
    sumOfDegrees += Ceil((event.Sociology / 48) * 56) | 0
    sumOfDegrees += Ceil((event.Philosophy / 60) * 84) | 0
    percentage = parseFloat(((sumOfDegrees / 1240) * 100).toFixed(3))

    event.IslamicEducation < 24 ? fail.push('التربية الإسلامية') : ''
    if (
      (event.LinguisticStudies / 60) * 81 +
        (event.LiteraryStudies / 60) * 50 +
        (event.ReadingAndLiteraryCriticism / 48) * 45 +
        event.Expression <
      98
    ) {
      if (event.LinguisticStudies < 30) {
        fail.push('الدراسات اللغوية')
      }
      if (event.LiteraryStudies < 30) {
        fail.push('الدراسات الأدبية')
      }
      if (event.ReadingAndLiteraryCriticism < 24) {
        fail.push('المطالعة و النقد الأدبي')
      }
      if (event.Expression < 10) {
        fail.push('التعبير')
      }
    }
    event.EnglishLanguage < 30 ? fail.push('اللغة الانجليزية') : ''
    event.InformationTechnology < 24 ? fail.push('تقنية المعلومات') : ''
    event.Statistics < 24 ? fail.push('الإحصاء') : ''
    event.History < 30 ? fail.push('التاريخ') : ''
    event.Geography < 30 ? fail.push('الجغرافيا') : ''
    event.Psycology < 24 ? fail.push('علم النفس') : ''
    event.Sociology < 24 ? fail.push('علم الاجتماع') : ''
    event.Philosophy < 30 ? fail.push('الفلسفة') : ''

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
            sumOfSemesters={true}
          />
          <SubjectInput
            register={register('IslamicEducation')}
            subjectEnglishName="IslamicEducation"
            subject="التربية الإسلامية"
            max={48}
          />
          <SubjectInput
            register={register('LinguisticStudies')}
            subjectEnglishName="LinguisticStudies"
            subject="الدراسات اللغوية"
            max={60}
          />
          <SubjectInput
            register={register('LiteraryStudies')}
            subjectEnglishName="LiteraryStudies"
            subject="الدراسات الأدبية"
            max={60}
          />
          <SubjectInput
            register={register('ReadingAndLiteraryCriticism')}
            subjectEnglishName="ReadingAndLiteraryCriticism"
            subject="المطالعة و النقد الأدبي"
            max={60}
          />
          <SubjectInput
            register={register('Expression')}
            subjectEnglishName="Expression"
            subject="الإنشاء"
            max={20}
            expressionsSubject={true}
          />
          <SubjectInput
            register={register('EnglishLanguage')}
            subjectEnglishName="EnglishLanguage"
            subject="اللغة الإنجليزية"
            max={60}
          />
          <SubjectInput
            register={register('InformationTechnology')}
            subjectEnglishName="InformationTechnology"
            subject="تقنية المعلومات"
            max={48}
          />
          <SubjectInput
            register={register('Statistics')}
            subjectEnglishName="Statistics"
            subject="الإحصاء"
            max={48}
          />
          <SubjectInput
            register={register('History')}
            subjectEnglishName="History"
            subject="التاريخ"
            max={60}
          />
          <SubjectInput
            register={register('Geography')}
            subjectEnglishName="Geography"
            subject="الجغرافيا"
            max={60}
          />
          <SubjectInput
            register={register('Psycology')}
            subjectEnglishName="Psycology"
            subject="علم النفس"
            max={60}
          />
          <SubjectInput
            register={register('Sociology')}
            subjectEnglishName="Sociology"
            subject="علم الاجتماع"
            max={60}
          />
          <SubjectInput
            register={register('Philosophy')}
            subjectEnglishName="Philosophy"
            subject="الفلسفة"
            max={60}
          />
        </div>
        <button
          type="submit"
          className="p-4 m-8 block mx-auto rounded-lg bg-yellow-300 hover:bg-yellow-400 border border-yellow-900"
        >
          احسب النسبة
        </button>
      </form>
    </>
  )
}

export default Literary
