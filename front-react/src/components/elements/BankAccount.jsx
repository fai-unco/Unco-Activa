export function BankAccount() {
    const bankAccount = {
        bank: 'Banco Credicoop Cooperativo Limitado',
        adherent: 'Universidad Nacional del Comahue',
        operator: '549505 Roberto Antonio Sepulveda',
        accountNumber: '$191-093-031471/2',
        cbu: '19100933 - 55009303147128'
    }
    
    return(
        <ul className='list-none py-3'>
            <li className='font-Hurme-Geometric-N'>{bankAccount.bank}</li>
            <li><span className='font-Hurme-Geometric-N'>Adherente:</span> {bankAccount.adherent}</li>
            <li><span className='font-Hurme-Geometric-N'>Operador:</span> {bankAccount.operator}</li>
            <li><span className='font-Hurme-Geometric-N'>Nro. Cuenta – Cuenta Corriente:</span> {bankAccount.accountNumber}</li>
            <li><span className='font-Hurme-Geometric-N'>CBU</span> {bankAccount.cbu}</li>
        </ul>
    )
}