
export function X(props) {
    return (
        <div>
            <li>
                <a href={props.url} class="flex items-center p-3 text-base font-bold text-white-900 rounded-lg bg-gray-700 hover:bg-gray-800 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 24 24">
                        <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,21H3V3h18V21z M17.538,17l-4.186-5.99L16.774,7h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path>
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap text-white">X</span>
                </a>
            </li>
        </div>
    )
}