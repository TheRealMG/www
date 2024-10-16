import { getThemeAuthorLink, ZenTheme } from "@/lib/themes";

import { TagIcon } from "lucide-react";

import { Badge } from "./ui/badge";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function ThemeCard({
	theme,
	className,
}: {
	theme: ZenTheme;
	className?: string;
}) {
	const maxNameLen = 50;
	const maxDescLen = 100;
  const authorLink = getThemeAuthorLink(theme);

	return (
		<Link
      href={`/themes/${theme.id}`}
      className="rounded-xl"
		>
			<Card className="select-none h-full flex-col justify-between rounded-xl border-2 border-[transparent] bg-surface transition-all duration-200 hover:border-[rgba(0,0,0,.5)] hover:shadow-lg dark:bg-[#121212] dark:hover:border-[#333]">
			  <div className="relative m-2 mb-0 hidden aspect-[1.85/1] h-48 overflow-hidden rounded-xl border-2 border-[rgba(0,0,0,.5)] object-cover shadow dark:border-[#333] lg:block lg:h-auto">
  				<img
  					src={theme.image}
  					alt={theme.name}
  					className="h-full w-full object-cover"
  				/>
  			</div>
  			<div className="w-full p-5">
  				<CardHeader>
  				  <CardTitle className="overflow-ellipsis text-start text-xl font-bold">
    					{theme.name.substring(0, maxNameLen).trim() +
    						(theme.name.length > maxNameLen ? "..." : "")}
    				</CardTitle>
    				<div className="flex min-h-6 flex-wrap gap-2">
    					{theme.tags?.length ? (
    						theme.tags.map((tag) => (
    							<Badge key={tag} variant="secondary">
    								<TagIcon className="mr-1 h-3 w-3" />
    								{tag}
    							</Badge>
    						))
    					) : (
    						<span className="self-center text-xs italic text-gray-500">
    							No tags available
    						</span>
    					)}
    				</div>
  				</CardHeader>
          <CardContent>
  				  <p className="text-md mt-2 overflow-ellipsis text-start text-muted-foreground">
    					{theme.description.substring(0, maxDescLen).trim() +
    						(theme.description.length > maxDescLen ? "..." : "")}
    				</p>
  				</CardContent>
  				<CardFooter className="mt-2 flex">
          {theme.homepage && (
						<a
							href={theme.homepage}
							className="text-md text-blue-500"
							target="_blank"
							rel="noopener noreferrer"
							onClick={(e) => e.stopPropagation()}
						>
							Homepage
						</a>
					)}
					{theme.homepage && authorLink && (
						<span className="text-md mx-2 text-muted-foreground">·</span>
					)}
					{authorLink && (
						<a
							href={authorLink}
							className="text-md text-blue-500"
							target="_blank"
							rel="noopener noreferrer"
							onClick={(e) => e.stopPropagation()}
						>
							Author
						</a>
					)}
  				</CardFooter>
  			</div>
			</Card>
		</Link>
	);
}
