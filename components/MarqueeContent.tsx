import { cn } from '@/lib/utils';
import { Marquee } from '@/components/ui/marquee';

const reviews = [
    {
        name: 'Jack',
        username: '@jack',
        body: "I've never seen anything like this before. It's amazing. I love it.",
        rating: "⭐⭐⭐⭐⭐",
        date: '2023-10-01',
    },
    {
        name: 'Jill',
        username: '@jill',
        body: "I don't know what to say. I'm speechless. This is amazing.",
        rating: "⭐⭐⭐⭐",
        date: '2023-10-02',
    },
    {
        name: 'John',
        username: '@john',
        body: "I'm at a loss for words. This is amazing. I love it.",
        rating: "⭐⭐⭐⭐",
        date: '2023-10-03',
    },
];

const ReviewCard = ({
    name,
    username,
    body,
    rating,
    date,
}: {
    name: string;
    username: string;
    body: string;
    rating: string;
    date: string;
}) => {
    return (
        <figure
            className={cn(
                'relative h-80 w-60 cursor-pointer overflow-hidden rounded-xl p-6',
                // light styles
                ' bg-gray-950/[.01] hover:bg-gray-950/[.05]',
                // dark styles
                ' dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-2xl font-bold text-gray-700">
                    {name.charAt(0)}
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-lg font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-sm font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <div className="mt-4 flex items-center">
                <span className="text-lg font-medium dark:text-white">{rating}</span>
            </div>
            <blockquote className="mt-4 text-base">{body}</blockquote>
            <figcaption className="mt-4 text-sm font-medium dark:text-white/40">{date}</figcaption>
        </figure>
    );
};

export function MarqueeDemoVertical() {
    return (
        <div className="relative flex h-[600px]  flex-row items-center justify-center overflow-hidden rounded-lg bg-background ">
            <Marquee pauseOnHover vertical className="[--duration:20s]">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.username}
                        {...review}
                    />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
        </div>
    );
}
