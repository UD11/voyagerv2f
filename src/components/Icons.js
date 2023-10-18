import * as React from "react";


export const BlankPostComponent = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={150}
    height={150}
    viewBox="0 0 500 500"
    {...rest}
    className={`${className}`}
  >
    <path d="M304.67 171.808H97.718c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4H304.67c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM304.67 210.856H97.718c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4H304.67c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM304.67 249.908H97.718c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4H304.67c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM304.67 288.952H97.718c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4H304.67c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM402.286 328H257.81c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4h144.476c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM402.286 367.048H257.81c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4h144.476c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM402.286 406.092H257.81c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4h144.476c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM402.286 445.144H257.81c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4h144.476c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM402.286 171.808H339.81c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4h62.476c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM402.286 210.856H339.81c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4h62.476c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM402.286 249.908H339.81c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4h62.476c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4zM402.286 288.952H339.81c-2.212 0-4 1.788-4 4 0 2.212 1.788 4 4 4h62.476c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4z" />
    <path d="M433.526 0H66.478c-6.512 0-11.812 5.296-11.812 11.808v476.384c0 6.512 5.3 11.808 11.812 11.808h367.048c6.512 0 11.808-5.296 11.808-11.808V11.808C445.334 5.296 440.038 0 433.526 0zm3.808 488.192c0 2.1-1.708 3.808-3.808 3.808H66.478a3.815 3.815 0 0 1-3.812-3.808V11.808c0-2.1 1.712-3.808 3.812-3.808h367.048c2.1 0 3.808 1.708 3.808 3.808v476.384z" />
    <path d="M402.29 46.856H97.718c-2.212 0-4 1.788-4 4v85.904c0 2.212 1.788 4 4 4h304.568c2.212 0 4-1.788 4.004-4V50.856c0-2.212-1.788-4-4-4zm-4 85.904H101.718V54.856H398.29v77.904zM214.862 328H97.718c-2.212 0-4 1.788-4 4v117.144c0 2.212 1.788 4 4 4h117.144c2.212 0 4-1.788 4-4V332c0-2.212-1.788-4-4-4zm-4 117.144H101.718V336h109.144v109.144z" 
    style={{
      fill: "#555",
      }} />
  </svg>
);


export const LogoComponent = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={64}
    height={64}
    viewBox="0 0 274.311 274.311"
    {...rest}
    className={`${className}`}
  >
    <path d="m217.601 133.999 11.512 6.272a.555.555 0 0 0 .764-.224.556.556 0 0 0-.228-.764l-11.512-6.276a.552.552 0 0 0-.764.228.556.556 0 0 0 .228.764z" />
    <path d="M270.021 168.603c-.584-2.456-2.484-3.42-5.54-2.972l-11.636-7.7c.016-.12.1-.228.08-.348-.336-1.828-48.752-59.7-62.112-75.284-.94-1.096-2.172-2.628-3.444-4.208-4.412-5.472-5.828-7.108-6.712-7.42-.144-.052-.28.028-.428.036l-11.404-15.72V19.451c.912.456 1.976.852 3.172 1.176l1.636.332c.568.092 1.176.144 1.852.156.2.008.4.012.596.012 2.28 0 4.66-.512 6.92-1.496 1.916-.888 3.84-2.204 5.728-3.916l1.084-.976c1.12-1.016 2.18-1.976 3.224-2.752 1.328-1 2.7-1.816 4.068-2.42 1.128-.468 2.372-.904 3.792-.904 2.408.008 5.42.916 8.068 2.432 2.424 1.376 3.98 3.02 4.852 4.148.432.576.72 1.068.936 1.472l.296.652a1.18 1.18 0 0 0 1.552.616c.456-.208.744-.68.704-1.18l-.068-.768a13.668 13.668 0 0 0-.52-2.256c-.648-2.14-2.24-4.656-4.368-6.916-2.192-2.248-5.328-5.004-10.192-6.32-2.36-.648-5.16-.724-7.672-.184-2.248.448-4.548 1.22-6.836 2.284-.824.38-1.624.76-2.396 1.128-1.16.556-2.252 1.08-3.268 1.512l-4.5 1.796c-1.124.488-2.152.9-3.088 1.248l-.996.316.004.012a.295.295 0 0 0-.056.016l-.468.056-.144.036c-.4.156-.808.248-1.252.26-.784.064-1.76.108-2.656.06V.871h-8.924v32.64l-8.644-6.668c-3.948-3.052-7.9-6.104-11.856-9.144-1.336-1.024-3.088-2.096-4.728-1.468-1.68.656-2.248 2.724-2.556 4.448-.936 5.252-1.82 10.52-2.704 15.784-1.404 8.396-2.864 16.972-4.524 25.504 0-.116.004-.228.004-.344.008-.06.012-.12.012-.184l.008-6.08c.016-6.092.032-12.184-.084-18.272-.036-1.564-.832-3.752-2.288-4.904-8.876-7.012-18-14.004-26.828-20.764l-1.244-.948c-1.64-1.256-3.12-1.62-4.396-1.088-1.276.536-2.064 1.852-2.324 3.916-2.908 22.824-7.344 46.572-13.196 70.58-11.508 47.26-25.268 84.8-43.304 118.144-.54.996-.52 2.124-.504 3.116.008.36.016.72-.012 1.064-.032.396.104.78.372 1.076.5.544 1.332.456 2.104.532.432.044.896.088 1.36.088.604 0 1.22-.08 1.808-.332a279.585 279.585 0 0 1 42.42-14.524c-1.688 3.1-3.352 6.216-5.116 9.252-.58 1-.536 2.156-.5 3.18.016.36.032.724.008 1.068-.028.396.112.78.38 1.068.268.284.532.492 1.04.444.32-.016.704.028 1.072.064.404.036.832.076 1.268.076.616 0 1.248-.08 1.852-.344 25.768-11.324 53.048-19.952 81.092-25.68v11.036l-.732.24c-11.412 3.824-22.816 7.644-34.272 11.324-22.744 7.292-43.38 11.344-63.084 12.376-5.4.276-10.748.212-16.416.132a568.75 568.75 0 0 0-7.912-.072c-.72 0-1.324.54-1.408 1.252-.916 7.804 1.14 14.144 6.096 18.9-5.048-.832-8.916-3.804-8.916-7.256 0-.78-.636-1.416-1.416-1.416-.78 0-1.416.636-1.416 1.416 0 4.072-5.368 7.508-11.724 7.508s-11.724-3.436-11.724-7.508c0-.78-.636-1.416-1.416-1.416-.78 0-1.416.636-1.416 1.416 0 5.704 6.532 10.344 14.56 10.344 5.816 0 10.812-2.452 13.14-5.968 2.328 3.512 7.324 5.968 13.14 5.968 6.024 0 11.204-2.616 13.416-6.328 2.212 3.716 7.392 6.328 13.416 6.328 5.816 0 10.812-2.452 13.14-5.968 2.328 3.512 7.324 5.968 13.14 5.968 5.692 0 10.58-2.356 12.972-5.748 2.392 3.392 7.28 5.748 12.972 5.748 5.816 0 10.812-2.452 13.14-5.968 2.328 3.512 7.324 5.968 13.14 5.968 5.708 0 10.612-2.368 12.996-5.776 2.384 3.408 7.288 5.776 12.996 5.776 5.816 0 10.812-2.452 13.14-5.968 2.328 3.512 7.324 5.968 13.14 5.968 6.024 0 11.204-2.612 13.416-6.324 2.212 3.712 7.392 6.324 13.416 6.324 8.028 0 14.56-4.64 14.56-10.344 0-.78-.636-1.416-1.416-1.416-.78 0-1.416.636-1.416 1.416 0 4.072-5.368 7.508-11.724 7.508s-11.724-3.436-11.724-7.508c0-.78-.636-1.416-1.416-1.416-.096 0-.18.036-.272.056-.092-.02-.176-.056-.272-.056-.78 0-1.416.636-1.416 1.416 0 4.072-5.368 7.508-11.724 7.508-1.476 0-2.888-.2-4.204-.536 1.204-14.532 6.048-27.068 14.284-37.56.068-.012.136-.028.204-.044-.02-.056-.012-.116-.032-.172a71.698 71.698 0 0 1 13.78-13.324c1.04-.76 2.38-1.392 3.876-1.816 11.804-3.348 23.632-6.616 35.46-9.872 4.408-1.224 4.432-4.088 4.052-5.684zM168.833 10.235h.004c.956.032 1.936-.02 2.712-.084a4.773 4.773 0 0 0 1.528-.312l.64-.084.608.04.02-.264.416-.136c.98-.364 2.024-.78 3.156-1.268l4.496-1.792c1.04-.444 2.152-.976 3.324-1.54.764-.364 1.564-.748 2.384-1.12 2.212-1.032 4.424-1.772 6.588-2.208 2.36-.496 4.956-.436 7.14.168 4.6 1.248 7.588 3.872 9.672 6.012 2.008 2.124 3.504 4.48 4.104 6.464.276.864.404 1.572.472 2.056l-.016.74-.312-.696a12.783 12.783 0 0 0-1.056-1.66c-.94-1.22-2.604-2.98-5.196-4.444-2.844-1.632-5.988-2.576-8.624-2.584-1.616 0-2.988.472-4.244.992a21.62 21.62 0 0 0-4.296 2.56c-1.084.808-2.164 1.784-3.304 2.82l-1.084.976c-1.8 1.632-3.632 2.888-5.428 3.72-2.292 1-4.752 1.5-7.02 1.388a12.658 12.658 0 0 1-1.708-.14l-1.524-.308c-1.16-.312-2.188-.692-3.052-1.132a2.816 2.816 0 0 1-.344-.216l-.056-.036v-7.912zm-78.272 3.416c.156-1.22.488-1.612.604-1.66.112-.048.62-.012 1.58.724l1.244.948c8.82 6.756 17.936 13.744 26.792 20.744.612.484 1.192 1.788 1.212 2.736.052 2.64.028 5.284.04 7.928l-33.996-13.76c.936-5.94 1.78-11.832 2.524-17.66zm-2.724 18.804 34.2 13.844c.008 3.016.052 6.032.044 9.052l-.012 5.904c-.008.06-.012.12-.012.184 0 1.64-.028 3.284-.06 4.924-.052 2.972-.064 6.024.064 9.068-.148.644-.316 1.256-.468 1.896l-41.084-4.876c-.196-.04-.352.056-.468.2 3.048-13.56 5.68-27 7.796-40.196zM77.309 84.543c.928-3.82 1.764-7.616 2.62-11.42.052.224.2.42.444.448l40.944 4.86c-2.608 11.072-5.436 21.824-8.548 32.188l-41.544-2.804a704.107 704.107 0 0 0 6.084-23.272zm-6.372 24.32c.06.028.1.08.168.084l41.308 2.788a464.994 464.994 0 0 1-13.42 38.216l-42.92 4.332c5.376-14.144 10.3-29.192 14.864-45.42zm-35.692 96.096c-.348.156-1.012.096-1.664.032-.012-.648-.016-1.3.16-1.624 8.116-15 15.364-30.848 21.936-48.016.076.036.14.088.228.088.02 0 .04 0 .06-.004l42.556-4.296c-5.396 13.352-11.288 26.16-17.792 38.404-.224.072-.424.156-.676.22-15.108 3.728-30.188 8.84-44.808 15.196zm124.088-25.596c-28.24 5.772-55.712 14.472-81.668 25.88-.356.152-1.012.1-1.664.048-.024-.592-.044-1.3.12-1.58 8.148-14.036 15.492-28.748 22.088-44.256l61.124-5.76v25.668zm0-26.804-60.648 5.716c5.416-12.832 10.28-26.264 14.696-40.264l45.952 2.9v31.648zm0-32.784-45.596-2.876c3.076-9.836 5.912-19.984 8.524-30.452l37.072 4.108v29.22zm0-30.356-36.8-4.08c.792-3.204 1.62-6.356 2.368-9.62 1.936-8.432 3.54-17.012 5.028-25.532l29.3 11.068c.036.012.068.012.104.02v28.144zm0-29.332-29.204-11.032c.708-4.072 1.396-8.124 2.068-12.128.88-5.252 1.764-10.512 2.696-15.752.36-2.032.796-2.304.792-2.304-.008.004.484-.084 1.988 1.076 3.96 3.04 7.908 6.088 11.856 9.14l8.94 6.9c.268.208.548.404.864.612v23.488zm26.264 19.424c1.288 1.6 2.54 3.148 3.492 4.26 18.924 22.076 53.26 63.56 60.336 72.544-2.824-.516-7.66-1.516-11.788-2.372-3.744-.776-7.424-1.54-9.952-2.02-3.908-.748-9.364-1.004-15.104-1.004-11.072 0-23.192.968-27.284 1.328.576-4.828 2.492-20.96 3.272-27.988a.94.94 0 0 0 .004-.212c-.772-10.26-3.56-28.192-5.404-40.056-.544-3.492-1.068-6.872-1.408-9.16 1.2 1.412 2.684 3.256 3.836 4.68zm-16.776-22.604 10.468 14.428c-.024.06-.104.092-.116.156-.124.564.088 2.124 1.752 12.856 1.832 11.784 4.596 29.58 5.38 39.768-.936 8.38-3.428 29.248-3.428 29.252-.028.208.024.408.112.596l-14.168 20.332V56.907zm0 119.376 15.1-21.676c.064.004.12.028.184.024.304-.032 30.612-2.864 43.156-.48 2.516.48 6.188 1.24 9.916 2.012 9.856 2.044 13.504 2.756 14.588 2.756.084 0 .148-.004.2-.012.152-.02.248-.148.376-.224l10.8 7.148-2.04.404c-23.356 4.6-47.508 9.364-70.636 16.832-7.232 2.336-14.436 4.76-21.644 7.168v-13.952zm-6.66 4.24V3.131h4.396v187.852c-1.464.488-2.932.964-4.396 1.456v-11.916zm-2.096 15.604c8.508-2.86 17.028-5.68 25.552-8.468-4.492 3.72-8.592 7.888-12.124 12.52-1.82 2.38-3.96 4.884-6.58 4.884-.172 0-.344-.012-.516-.032-1.612-.204-3.1-1.416-4.424-3.6a22.114 22.114 0 0 1-2.26-5.188c.116-.04.236-.076.352-.116zm-34.308 11.328c5.62-1.804 11.212-3.7 16.812-5.552 1.632 6.288 3.22 13.56 3.364 17.576.052 1.336.052 2.86-.58 4.036-.716 1.352-1.9 1.704-2.764 1.764-.1.004-.208.008-.308.008-1.86 0-3.936-1.108-5.144-2.776-1.076-1.488-1.82-3.284-2.544-5.028-.74-1.776-1.5-3.612-2.628-5.184-1.792-2.5-4.204-3.896-6.756-4.676.184-.06.364-.108.548-.168zm-5.764 1.768c-.004.004-.004.008-.008.012 1.032 1.016 2.024 2.076 2.932 3.224.616.772.872 1.376.756 1.78-.056.204-.156.26-.24.308-.38.156-1.196-.052-2.072-.54-2.612-1.448-5.444-2.324-8.36-2.764 2.312-.644 4.64-1.312 6.992-2.02zm-26.956 6.792c-.42.272-.844.54-1.264.816-2.18 1.424-4.428 2.904-6.828 3.836-2.044.796-5.976 1.816-9.336-.272a7.738 7.738 0 0 1-1.692-1.448 228.093 228.093 0 0 0 19.12-2.932zm-46.044 21.452c-.252-.132-.54-.232-.76-.392-3.892-2.864-6.228-6.476-7.112-10.892 2.364.432 4.712.956 7.008 1.648.704.212 1.408.436 2.108.66 2.328.744 4.736 1.508 7.236 1.808.344.044.748.076 1.176.096-.228 3.496-4.376 6.456-9.656 7.072zm12.8-8.188c-.26-.356-.656-.604-1.128-.604-.096 0-.184.036-.276.056-.092-.02-.176-.056-.276-.056a1.41 1.41 0 0 0-1.244.772c-.432-.016-.848 0-1.292-.052-2.416-.292-4.78-1.048-7.068-1.772-.712-.228-1.416-.452-2.124-.664-2.448-.74-4.948-1.296-7.472-1.744-.232-1.616-.284-3.344-.148-5.18 2.224.008 4.416.036 6.588.068 5.716.08 11.104.152 16.596-.14 1.752-.092 3.524-.236 5.292-.376.276 2.868-.456 5.836-2.84 7.784-1.204.984-2.812 1.604-4.608 1.908zm12.016 8.324c-3.512 0-6.684-1.072-8.852-2.696 1.54-.02 3.1-.108 4.552-.264 5.248-.552 10.34-1.24 15.272-2.028-1.664 2.868-5.992 4.988-10.972 4.988zm26.284 0a16.44 16.44 0 0 1-5.688-1.016c5.628-1.14 11.168-2.372 16.556-3.772-1.748 2.768-6.008 4.788-10.868 4.788zm14.604-5.736c2.324-.58 4.72-1.06 7.26-1.072h.06c2.796 0 5.184.848 5.588 1.612.06.108.088.236-.048.432-.376.552-1.62 1.08-2.364 1.396-1.392.588-3.484 1.232-5.972 1.896-2.204-1.032-3.84-2.536-4.524-4.264zm11.336 5.736c-1.944 0-3.764-.352-5.4-.912 2.02-.564 3.716-1.108 4.912-1.616 1.18-.5 2.272-1.008 2.76-1.716.3-.436.336-.924.096-1.376-.724-1.364-3.82-2.092-6.396-2.092h-.064c-2.62.012-5.064.496-7.424 1.084.036-.296.124-.58.124-.88 0-.78-.636-1.416-1.416-1.416-.06 0-.112.028-.168.032-.056-.008-.108-.032-.168-.032-.78 0-1.416.636-1.416 1.416 0 .376.1.732.156 1.1-.044.188-.08.376-.148.56-6.008 1.58-12.224 2.948-18.532 4.208-2-1.012-3.492-2.412-4.16-4.02 2.436-.428 4.836-.88 7.168-1.364 1.212-.252 2.416-.516 3.62-.776 4.58-.992 9.312-2.02 14.604-2.58 6.44-.676 14.68-.5 17.964 1.16 1.2.6 1.464 1.276 1.572 1.864.432 2.404-2.168 5.008-6.868 7.3-.272.012-.536.056-.816.056zm26.288.004c-6.36-.004-11.724-3.444-11.724-7.512 0-.78-.636-1.416-1.416-1.416s-1.416.636-1.416 1.416c0 3.32-3.596 6.188-8.364 7.14 3.752-2.224 5.66-4.692 5.216-7.148-.196-1.108-.848-1.912-2.056-2.516-3.44-1.732-11.888-1.948-18.464-1.248-5.34.56-10.1 1.588-14.704 2.588-1.204.26-2.408.524-3.616.772-2.356.492-4.78.944-7.244 1.38-.068-.324-.16-.64-.16-.972 0-.78-.636-1.416-1.416-1.416-.78 0-1.416.636-1.416 1.416 0 .516-.088 1.024-.256 1.516-5.112.832-10.4 1.556-15.864 2.136-1.768.184-3.7.3-5.52.256-1.096-1.12-1.76-2.416-1.792-3.8 1.648-.288 3.384-.904 4.876-2.124 2.64-2.156 3.456-5.42 3.164-8.552 1.576-.132 3.16-.296 4.748-.464.636.812 1.348 1.556 2.24 2.108 3.7 2.284 7.94 1.2 10.14.344 2.488-.968 4.78-2.468 6.996-3.92.664-.432 1.324-.868 1.992-1.288.508-.32 1.048-.58 1.568-.88a275.85 275.85 0 0 0 14.84-3.536c3.596.228 7.084 1.156 10.256 2.912.68.38 1.96.96 2.856.584.032-.012.064-.028.096-.044.328-.168.56-.46.668-.848.264-.952-.396-1.932-.916-2.592-.832-1.056-1.76-2.016-2.7-2.96.896-.272 1.792-.544 2.696-.828 2.876.612 5.64 1.98 7.608 4.72 1.068 1.48 1.808 3.268 2.528 5 .74 1.788 1.508 3.636 2.644 5.212 1.372 1.896 3.748 3.156 5.888 3.156.12 0 .244-.008.364-.016 1.552-.104 2.792-.904 3.504-2.24.736-1.38.74-3.044.684-4.496-.152-4.088-1.76-11.468-3.412-17.828 3.56-1.18 7.128-2.34 10.684-3.528.424 1.308.84 2.62 1.212 3.944a263.314 263.314 0 0 1 3.76 15.152c.92 4.236 1.692 9.056-.872 12.7-.92 1.312-2.264 2.428-3.568 3.516-1.508 1.252-3.016 2.556-3.92 4.176-.14.004-.272.028-.412.028zm46.212-8.244c-6.248-1.476-11.54-3.86-15.128-7.08-.548-.484-2.44-1.996-3.98-1.08-.724.436-.924 1.204-.6 2.276.884 2.908 3.368 9.164 6.456 12.044.084.084.2.12.308.12a.452.452 0 0 0 .308-.784c-2.732-2.548-5.208-8.36-6.208-11.644-.248-.828-.04-1.084.204-1.232.784-.484 2.068.224 2.908.972 3.712 3.332 9.18 5.792 15.62 7.3a84.088 84.088 0 0 0-.752 5.812c-2.88-1.38-4.8-3.556-4.8-5.972 0-.78-.636-1.416-1.416-1.416-.78 0-1.416.636-1.416 1.416 0 4.072-5.368 7.508-11.724 7.508-.204 0-.392-.032-.592-.04-1.736-5.912-3.552-17.88-3.612-23.852-.016-1.28.024-2.744.648-3.856.716-1.272 1.852-1.584 2.676-1.616.06-.004.12-.004.18-.004 1.796 0 3.8 1.12 4.928 2.78.988 1.452 1.656 3.2 2.3 4.888.66 1.724 1.344 3.508 2.384 5.044 2.908 4.304 7.66 5.512 11.912 5.6-.2.94-.436 1.856-.604 2.816zm12.612-29.988c-1.968.416-3.992.744-6.104.744-.14 0-.28 0-.42-.004-2.816-.06-5.216-.968-5.604-1.752-.056-.108-.084-.24.06-.436.364-.5 1.428-.952 2.404-1.336 4.796-1.892 10.296-3.476 16.16-4.736-2.356 2.388-4.548 4.88-6.496 7.52zm7.66-8.696c-6.424 1.316-12.452 3.012-17.664 5.068-1.136.448-2.292.948-2.8 1.648-.312.428-.36.916-.136 1.372.696 1.396 3.816 2.204 6.404 2.252.144.004.292.004.44.004 1.812 0 3.548-.232 5.236-.548-.78 1.1-1.436 2.272-2.144 3.416-.056.008-.104.02-.16.024-4.904.496-11.472.096-13.956-1.604-.916-.624-1.108-1.32-1.18-1.916-.444-3.752 4.364-7.656 12.56-10.18 4.152-1.28 11.352-3.104 18.776-4.272a75.002 75.002 0 0 0-5.376 4.736zm48.404-19.136a4571.842 4571.842 0 0 0-35.484 9.88c-1.268.36-3.128 1.044-4.78 2.26-.5.368-.928.78-1.416 1.156-8 1.152-15.936 3.132-20.388 4.504-8.64 2.66-13.696 6.936-13.192 11.152.08.696.328 1.716 1.564 2.564 2.008 1.372 6.212 1.964 10.372 1.964a43.4 43.4 0 0 0 3.66-.176 67.563 67.563 0 0 0-3.276 6.212c-1.556 0-3.112 0-4.76-.12-5.288-.392-10.264-3.58-12.108-7.748-1.632-3.692-.776-7.836 2.472-11.98a.452.452 0 0 0-.076-.636.452.452 0 0 0-.636.076c-4.388 5.592-3.828 10.108-2.588 12.912 1.968 4.46 7.26 7.868 12.868 8.284 1.528.112 2.96.104 4.404.108-1.932 4.316-3.416 8.888-4.492 13.692-4.072-.052-8.628-1.148-11.372-5.208-.98-1.448-1.64-3.184-2.284-4.86-.664-1.74-1.352-3.532-2.4-5.072-1.288-1.9-3.6-3.18-5.684-3.18-.076 0-.144 0-.216.004-1.492.064-2.712.8-3.424 2.08-.74 1.308-.78 2.912-.764 4.308.06 5.94 1.836 17.712 3.568 23.78-5.16-.46-9.332-3.148-10.02-6.456.04-.316.136-.624.136-.948 0-.78-.636-1.416-1.416-1.416-.052 0-.096.024-.144.028-.048-.004-.092-.028-.144-.028-.78 0-1.416.636-1.416 1.416 0 .324.092.632.136.948-.692 3.312-4.864 5.996-10.024 6.456.84-1.232 2.052-2.308 3.372-3.404 1.344-1.12 2.74-2.28 3.728-3.688 2.64-3.756 2.048-8.672 1.012-13.416a264.942 264.942 0 0 0-3.768-15.2 101.678 101.678 0 0 0-1.224-3.988c1.292-.432 2.588-.848 3.876-1.28a22.88 22.88 0 0 0 2.344 5.372c1.472 2.432 3.184 3.792 5.084 4.032.224.028.436.044.648.044 3.012 0 5.328-2.688 7.28-5.248 4.004-5.24 8.756-9.864 13.984-13.92 1.052-.344 2.096-.704 3.144-1.044 22.96-7.416 47.032-12.16 70.308-16.748l2.832-.56c2.452-.488 2.624.132 2.78.796.148.724.36 1.624-2.076 2.296zM55.397 252.899a.568.568 0 0 0-.568.568c0 2.148-2.696 3.9-6.004 3.9-3.308 0-6.004-1.752-6.004-3.9a.568.568 0 1 0-1.136 0c0 2.148-2.696 3.9-6.004 3.9-3.308 0-6-1.752-6-3.9a.568.568 0 1 0-1.136 0c0 2.772 3.204 5.032 7.136 5.032 2.948 0 5.484-1.268 6.572-3.068 1.088 1.804 3.624 3.068 6.572 3.068 3.932 0 7.136-2.256 7.136-5.032a.564.564 0 0 0-.564-.568zM93.329 267.499a.568.568 0 0 0-.568.568c0 2.148-2.696 3.9-6.004 3.9-3.308 0-6.004-1.752-6.004-3.9a.568.568 0 1 0-1.136 0c0 2.148-2.696 3.9-6.004 3.9-3.308 0-6.004-1.752-6.004-3.9 0-.312-.252-.568-.568-.568s-.56.256-.56.568c0 2.772 3.204 5.032 7.136 5.032 2.948 0 5.484-1.268 6.572-3.068 1.088 1.804 3.624 3.068 6.572 3.068 3.932 0 7.136-2.256 7.136-5.032a.57.57 0 0 0-.568-.568zM131.749 250.663a.568.568 0 0 0-.568.568c0 2.148-2.696 3.9-6.004 3.9-3.308 0-6.004-1.752-6.004-3.9a.568.568 0 1 0-1.136 0c0 2.148-2.696 3.9-6.004 3.9-3.308 0-6.004-1.752-6.004-3.9a.568.568 0 1 0-1.136 0c0 2.772 3.204 5.032 7.136 5.032 2.948 0 5.484-1.268 6.572-3.068 1.088 1.804 3.624 3.068 6.572 3.068 3.932 0 7.136-2.256 7.136-5.032a.56.56 0 0 0-.56-.568zM213.009 252.899a.568.568 0 0 0-.568.568c0 2.148-2.696 3.9-6.004 3.9s-6.004-1.752-6.004-3.9a.568.568 0 1 0-1.136 0c0 2.148-2.696 3.9-6.004 3.9s-6.004-1.752-6.004-3.9a.568.568 0 1 0-1.136 0c0 2.772 3.204 5.032 7.136 5.032 2.948 0 5.484-1.268 6.572-3.068 1.088 1.804 3.624 3.068 6.572 3.068 3.932 0 7.136-2.256 7.136-5.032a.556.556 0 0 0-.56-.568zM170.161 268.711a.568.568 0 0 0-.568.568c0 2.148-2.696 3.9-6.004 3.9s-6.004-1.752-6.004-3.9a.568.568 0 1 0-1.136 0c0 2.148-2.696 3.9-6.004 3.9s-6.004-1.752-6.004-3.9a.568.568 0 1 0-1.136 0c0 2.772 3.204 5.032 7.136 5.032 2.948 0 5.484-1.268 6.572-3.068 1.088 1.804 3.624 3.068 6.572 3.068 3.932 0 7.136-2.256 7.136-5.032a.558.558 0 0 0-.56-.568z"
    style={{
        fill: "#555",
        }} />
  </svg>
);
