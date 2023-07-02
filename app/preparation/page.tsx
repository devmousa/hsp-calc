'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

import Swal from 'sweetalert2'

import SubjectInput from '../../components/SubjectInput'
import { Ceil } from '../../utils/Ceil'
import { Appreciation } from '../../utils/Appreciation'

interface ISubjects {
  TwoSemesters: number
  IslamicEducation: number
  ArabicLanguage: number
  Writing: number
  EnglishLanguage: number
  Computer: number
  Mathematics: number
  Science: number
  History: number
  Geography: number
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
    sumOfDegrees += Ceil((event.IslamicEducation / 48) * 56) | 0
    sumOfDegrees += Ceil((event.ArabicLanguage / 60) * 112) | 0
    sumOfDegrees += Ceil(event.Writing) | 0
    sumOfDegrees += Ceil((event.EnglishLanguage / 60) * 112) | 0
    sumOfDegrees += Ceil(event.Computer) | 0
    sumOfDegrees += Ceil((event.Mathematics / 60) * 140) | 0
    sumOfDegrees += Ceil((event.Science / 60) * 140) | 0
    sumOfDegrees += Ceil((event.History / 48) * 56) | 0
    sumOfDegrees += Ceil((event.Geography / 48) * 56) | 0
    percentage = parseFloat(((sumOfDegrees / 1120) * 100).toFixed(3))

    event.IslamicEducation < 24 ? fail.push('التربية الإسلامية') : ''
    event.ArabicLanguage < 30 ? fail.push('اللغة العربية') : ''
    event.Writing < 28 ? fail.push('الكتابة') : ''
    event.EnglishLanguage < 30 ? fail.push('اللغة الإنجليزية') : ''
    event.Computer < 24 ? fail.push('الحاسوب') : ''
    event.Mathematics < 30 ? fail.push('الرياضيات') : ''
    event.Science < 30 ? fail.push('العلوم') : ''
    event.History < 24 ? fail.push('التاريخ') : ''
    event.Geography < 24 ? fail.push('الجغرافيا') : ''

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
            max={336}
            sumOfSemesters
          />
          <SubjectInput
            register={register('IslamicEducation')}
            subjectEnglishName="IslamicEducation"
            subject="التربية الإسلامية"
            max={48}
          />
          <SubjectInput
            register={register('ArabicLanguage')}
            subjectEnglishName="ArabicLanguage"
            subject="اللغة العربية"
            max={60}
          />
          <SubjectInput
            register={register('Writing')}
            subjectEnglishName="Writing"
            subject="الكتابة"
            max={56}
            another
          />
          <SubjectInput
            register={register('EnglishLanguage')}
            subjectEnglishName="EnglishLanguage"
            subject="اللغة الإنجليزية"
            max={60}
          />
          <SubjectInput
            register={register('Computer')}
            subjectEnglishName="Computer"
            subject="الحاسوب"
            max={56}
            another
          />
          <SubjectInput
            register={register('Mathematics')}
            subjectEnglishName="Mathematics"
            subject="الرياضيات"
            max={60}
          />
          <SubjectInput
            register={register('Science')}
            subjectEnglishName="Science"
            subject="العلوم"
            max={60}
          />
          <SubjectInput
            register={register('History')}
            subjectEnglishName="History"
            subject="التاريخ"
            max={48}
          />
          <SubjectInput
            register={register('Geography')}
            subjectEnglishName="Geography"
            subject="الجغرافيا"
            max={48}
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

export default Scientific
