// const ClubList = () => {
//   return (
//     <div className="space-y-3">
//       {clubList.data.length === 0 && <>검색 결과가 없습니다.</>}
//       {clubList?.data?.map((club: any, index: number) => (
//         <div key={index} className="flex items-center justify-between">
//           {/* Avatar & Info */}
//           <div className="flex items-center space-x-3">
//             <Avatar className="w-10 h-10">
//               <AvatarImage src={club.image} alt={club.name} />
//               <AvatarFallback>
//                 <Club />
//               </AvatarFallback>
//             </Avatar>
//             <div>
//               <p className="text-sm font-medium">{club.name}</p>
//               <p className="text-xs text-gray-500">{club.description}</p>
//             </div>
//           </div>

//           {/* Club join button (본인이 리더가 아니면) */}
//           {decoded.id !== club.leader.id && <Button>가입 신청</Button>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ClubList;
