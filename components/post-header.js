import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}
