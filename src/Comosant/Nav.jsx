import { Link } from "react-router-dom"
export default function Nav(props){
    const {them,setThem,direction} = props
    return(
        <nav className='col-12 d-flex align-items-center justify-content-center h-100'>
            <ul className={`${direction} w-100 d-flex align-items-center justify-content-evenly`}>  
                <li>
                    <Link to='/portfolio_project/' className=" w-100 h-100 flex-column d-flex align-items-center justify-content-center h-100">
                {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAl5JREFUSEu11dmrjlEUBvDfkQwZLtwhUwohynClECVDhkgoQ8o8X1HIEHeuzBkuhBIXpkSUC+ONlEyZp39AMg9hL+2jc97e7wwXZ9fXt9+9197PWut51tpVmnhUNfH96gNoiWkYi4Hojj94g3u4hNP4WcnRugDGYV++tK5AX2AJrpYZVQLYnIy35AMPsRe38SqvdcVgbESvvLYWO4ogZQBxcQBE2CtwsA734/xy7OJfulfn+f8jRYCJOI8fGI2bDRTBpMTRmWw7HLeqz9UEaIen6Ig12FlyeR8sxCK0zftB8mGMwDo8yYIIJ2upKIjanw+9TXtbcQqfM9GRilVoUSGqUNQohPKm4FwR4AIm4B2CxLIRXkVke7JdmxT1rJTS9ehR40DwtrgIEBd3yeHFf4ANQ880v5O8u47jeF6CHOmdh6Up6r64iyFFgC9onX/fGkhu0Swi+pTU9D6pqUMR4GMmrj1iHiP0vywXXHBQc5TtxdkP+XzMa5Ec7PdOpT8gtYcH+aZoC2WKi7WyvUE5PY/RrwhwIklsJmpWZGMjiMrelng7lqp+bhFgDo5mEkPvvxvJQ3O8zAqckSVeK0VBcKQpJDo/af9IIwFW5jbxLKf5ezGC+B6Dy6kiv2IoHjUQJGyjGTbDyNRmblQiLtY3YHtWw+yk5yjASiMujHQcSp00JBpRRBFWVEb1xqbcKuL7NU7iIu7nVtEfk1OE01O37ZQVFZ10d9GTuh6cqOQDybvO9aQpHpwFuFZmV9+T2Sp5PRXjM3HdsrehlmgHV3A2PTy/KjlRH0ADOa5s1uQAfwESQHMZ5TZ2tAAAAABJRU5ErkJggg=="/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApdJREFUSEvFlduLzVEUxz9fySXMgzcmtxQToph5UoiSSy6RhnJJYcZl8EQhl3jzhEGGB6FkHsYlEeXB9UVKbrlf5h+Qxp0se03bMec3v985Z9Rk1+nsfnvt9V1rfb9rbdHJS53sn4IAZtYdmA9MA8YAgwED3gL3gctAk6QfWYFmApjZdOBQdFoo0ZdAraRraUapAGa2IxjvjBceAQeBO8Dr+G0gMA7YBgyL3zZJ2psEaQdgZu7YATztdZIassI3M7+/FtgPreXeIMn3uZUHYGazgAvAd2CKpFuliMDMZgeOzkbbCZJu/7mXAzCzPsAzoB+wUdK+pHMzqwBWAquA3vG8CTgGTAQ2A09dEJI8yL8qMrNa4HC89C6c7QIaJX0yM1ePl2I90C0jK1fUZMCVN1fS+STARWAm0Aw4iWnLo/LM6iU1m1mvkPWiUNItwJA2Fxok1SQB3PGAqHf/d7DxwNCwvxuiuwGckvQipXRe3mXA6pD1COCepMokwGegp/8kfS2F3BQgz+hjUNP7oKa+SYCWSFyZJN9jZq7/Nd5wkpyD3Eo7M7My4APQIsn3eSQ7+8ND64+W9DAC+FhoXZKSkm53ZmZjvTzAE0kjkwCng8QWArmO/IcMvLN3B95OSlqaBFgCnACcxApJvzrCg5l1BV5FBVZLakwCOMFeJpfocknHOwhQF0fG81jmb3kAseZTgSuhI78AVZIelwJiZlVxGHYBJkm6meMuRWpbgT1RDYuDnr0BU5eZucNq4CjgEq2TVN/WOGtcb4+jwm3fAGeAS8CDOCpGAXOABUD/+Aj5JD2QjKTQg+OdfCREV16kTP7grJB0Pc2u2JPZI0Q9D5jhxAGDYrSuFtf7VeCcpJ9ZQfzfR78UBRWz+Q1sBOsZqGr9LwAAAABJRU5ErkJggg=="/>
                    }
                        About
                        </Link>
                    </li>
                <li>
                <Link to='/Resume' className=" w-100 h-100 flex-column d-flex align-items-center justify-content-center h-100">

                {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAN9JREFUSEvtlkEOATEUhr85hQURbDiBhQVu4DxuwIVsha2dFRZCYuMUqHSSUW1fO6MJiVnOvL7v9f1/Xycj8ZMlzo8NMAFmQM8D3wFj4CoVaANcgLq0ENgDIwliA9x0clf78u8q7AgMfJAqgBPQAg7A0AWpAmgAa6Dj20kVgFpbA1ZA1wUJAZiaFDUwvbAB+sWXZQBLbVGX0V5yhgACHPsMsbrvKwC+nqvK8yJL7yA54K/BWwdiDtZHRP49Dc5AM7RsI06N8LY0i9SVOdcTMoazBaaPYbeQADFJxdjkfxV3PzQ9GVWa3fYAAAAASUVORK5CYII="/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvtlj0OwjAMRp9PwQBCwAInYGAAbsB5uAFciBXBysYEDKhILJzCkKpFKCRNfxSxkDF1/OrPX9wKkZdEzs8XQFUXwAoYFcBPwFxEHqEXdAHuQDt0EDgDsxDEBVCTXESc8qlq+jxbV2BSBGkCSIAecAGmPkgTQAfYAwPAW0ltgJFQVVvADhj6IEFArnneE6sHthcOIjL+3KwD2BqL+lxmmyMIKGHXNMSuND/3e0BA8/d9qV1BdMC/B0EX/XvgkugGdMu6x4pLRKQfmkXmk7nOJmQVzhFYvobdphBQJWOZ2Oh/FU8bJr4ZjbIKagAAAABJRU5ErkJggg=="/>
                    }
                    Resume
                    </Link>

                </li>
     
                <li>
                <Link to='/Contact' className=" w-100 h-100 flex-column d-flex align-items-center justify-content-center h-100">

                {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEu11b0uREEYgOFnuQUkEpHo0LgGhQuQqNyARiEUCipsg0Si0ChUCtdA4RI0egoi4QokfnbkrMjZ2d0Z55xTf/O+33w/Z1oa/loN88UEK9jDXAX5LRbD+ZjgHvMV4N2jP+yY4KsG+C87V7CPsyKBdewMSCb7Bps4KQGD4KCPpEcwrDTjeCvBJvFclyDAXkqwMbymCrpx/W6yjcMSbBWXdQkCp41TjGIJR52mT6QKhvUgd3qzmxwEj3goTDOYrmtMr3CBa3wW0JGiTGtYjoiS9uC9M5phoc6H1GcLx6WYpBLtFo1NqX9Ywo0/gUmCKTyl0LGAu0GC2B7kvBehJx+5gsTko2FJTW5E0PiDE57M8N+frZD+TbEj0RetArf3aM6U/Ev8DavcMBm78qY2AAAAAElFTkSuQmCC"/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT9JREFUSEu1lr8uBFEUh78fr4BkE5Ho0HgGxT6AROUFNFsIhYIK2yDZRKFRqBSegcIjaPQURMITSDicNRObmdmZO3tnbn3O7zv3/LnnipaPWtYnBzCzDeAQWI6A30tac/8iwCOwEiE+dJU01C4CWKx4DOAIuEgC6AH744KZ5AY7kgajgmbmgOMiSA5gZlWpmZX0kQF0gNemAB1JbxnADPAeBEiNSm6yJ+kkA9gErpsCuE4fOAemgS5w+lv0uSBAQA1qde8kRXbAM/CUkBaBhaba9Aa4Am4lfbuomU0ladoC1rOg0Dn4BHqSLsvyY2a7wNmoTWiKDiR5YSuPmfkQbqeGoYB5SS+V6n8pWwUexgKK5iCNIhDgNfmqBQgRbqqLarPKuqj1heMr09/9pdph/zvcSfKnJL/RIkQLXVv/VfwAZYiHGY1LSfkAAAAASUVORK5CYII="/>
                    }
                    Contact
                    </Link>
                </li>
                <li onClick={()=>them === "clear"?setThem('sombre'):setThem('clear')}>
                {them === "clear"?
                <>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgZJREFUSEu11UuoTWEUB/Df9RwZIK8ICRlQIoryGCqFIaW8YuCRMKJEJiZeZaCQR5LHCJkoE2RE5DFAmUihFCWSKHtpndr3dPbd57j3rvra3977W+u/Hv+1vi79LF39bF8dwFhsyfUbkzt1qCeAHTiCIWn0I8b1BcBgXMeqNPYI8/AAi/sC4Bw24Ac24jPu4g6W9RZgBW7iD5bgYXp9D08wt7cAzzELh3AgjY1B5P8nRuNbJyDlIs/EC3zHBHwtGXqK2Zm6C/8LsBtHcRVrmoxsx0m8zIJHNG1JOYLT2IytONWkPRRvMR4Xsb4t63RrtBtYmetWCwMLcB+DEM5sQzRfj1KOIHK7DqtxrUIrUnceEdEr7EM4E6xrKWWAYM7+ZE/sq2QqLmN+HggyPMv9gCRDfJsY38oAC5P30bkN5SqQgdhb/DyI2DfL64IsM5oBAizCnp4dG51bJ1GPUQXDRmJEQe+zRXTTsAsnmgHiPfJ/BR8yivd1CKX/DSr/KlgYzfmvj1pN09tYXvRChBlFjSbrScLGzuyhqEGM9zMNhVYAw/EYU5IdkefDFUyZhEtYlAaPFaNkT9mbqvtgGI5jU4kpMa5j6L1BEGJppjG8/pJ9EentJnU3Wozn4H3cbFUSo3wtPrU6UAcQOsGUGHRz8hlpiboEneP5rq5AHRCl86PtRNC51ZLGX0IpXBnBPatbAAAAAElFTkSuQmCC"/>
                <a href="#">Dark</a>
                </>
                    :
                <>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdNJREFUSEvFlU+ITmEUxn8/koWVRClFE3tr2cxYmKWFsicWIiFDjBBChAU2zN5O2Y1iVtbWys6fImRloTjumd6vbtd373e/aSbv5t77vuee557nPOe5ssLLFc5Pb4CIyNg/+UFq7/d6By4rQERcBB6p3+oURkRkFerqxv4m4KB6s0n5PxVExAXgGvAWmFI/dfUpIrYAC8B24Jx6qx4/DGAr8AqYAE6rd0cAzACZ9F35oPedAHkYEVnyYfV6ed4PHAUmy8svgYfqs3J+HniifhlJUTMgIu5kJS1VXK4UdaWrwk4VRcQB4GlJcDUbX+6PAdmrXHvVF20gowDeADuBU+q9hnIGYphXpzsB6hqvD1Il19/AKmC9+qMBsBlIhX1XN7TlWKygA+AXsKYFIIXwGfiprusEaCsvIl4Du6okM1WS2y0ULahTS+3BPmBRikA2+QGwFjgOnCn70+r8kgAKfV0ynR3MylgAZdAOqTdqg3YC2F0SPQfm1LxmD1NRj3sNWkRsK96S15Pq/a5BioizQJpcWsWk+qEeP8yLZgvfaXZ71I8jANLs0rt29DK7UvKl4jVfG8pps+uN1UwcGdaP//PDGUbJsv7Rujgf96w3ReMmHsT/Be5OxhkcTrRyAAAAAElFTkSuQmCC"/>                <a href="#">Light</a>
                </>
                    }
                    

                </li>
            </ul>
        </nav>
    )
}