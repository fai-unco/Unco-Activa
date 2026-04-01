export function BankAccount() {
    const bankAccount = {
        bank: 'Credicoop Cooperativo Limitado',
        adherent: 'Universidad Nacional del Comahue',
        operator: '549505 Roberto Antonio Sepulveda',
        accountNumber: '$191-093-031471/2',
        cbu: '19100933 - 55009303147128',
        alias: 'CAMISA.ESPINA.SUELO'
    }
    
    return(
        <ul className='list-none py-3'>
            <li>
                <p className='font-Hurme-Geometric'> 
                    <b>Banco: </b> {bankAccount.bank}
                </p>
            </li>
            <li>
                <p className='font-Hurme-Geometric'> 
                    <b>Adherente: </b> {bankAccount.adherent}
                </p>
            </li>
            <li>
                <p className='font-Hurme-Geometric'> 
                    <b>Operador: </b> {bankAccount.operator}
                </p>
            </li>
            <li>
                <p className='font-Hurme-Geometric'> 
                    <b>Nro. Cuenta – Cuenta Corriente: </b> {bankAccount.accountNumber}
                </p>
            </li>
            <li>
                <p className='font-Hurme-Geometric'> 
                    <b>CBU: </b> {bankAccount.cbu}
                </p>
            </li>
            <li>
                <p className='font-Hurme-Geometric'> 
                    <b>Alias: </b> {bankAccount.alias}
                </p>
            </li>
        </ul>
    )
}