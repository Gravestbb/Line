import { QrCode, User, Award, Calendar, IdCard, Mail, Phone, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function MyPage() {
  return (
    <div className="p-4 space-y-4">
      {/* デジタル会員証 */}
      <Card className="p-6 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 rounded-full p-2">
            <IdCard className="size-6" />
          </div>
          <div>
            <p className="text-white/80 text-sm">会員証</p>
            <p className="text-white">一般社団法人</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-white/80 text-sm mb-1">会員氏名</p>
          <p className="text-white text-xl">山田 太郎</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-white/80 text-sm mb-1">会員ID</p>
            <p className="text-white">M-20240401</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">有効期限</p>
            <p className="text-white">2027/04/01</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 flex justify-center">
          <div className="text-center">
            <QrCode className="size-32 mx-auto text-gray-900 mb-2" />
            <p className="text-gray-600 text-sm">会員証QRコード</p>
          </div>
        </div>
      </Card>

      {/* 保有資格 */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Award className="size-5 text-blue-600" />
          <h3 className="text-gray-900">保有資格</h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
            <div>
              <p className="text-gray-900">基礎資格</p>
              <p className="text-gray-600 text-sm">取得日: 2024年4月1日</p>
            </div>
            <Badge className="bg-green-600">取得済</Badge>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div>
              <p className="text-gray-900">中級資格</p>
              <p className="text-gray-600 text-sm">進捗: 75%</p>
            </div>
            <Badge className="bg-blue-600">取得中</Badge>
          </div>
        </div>
      </Card>

      {/* 会員情報 */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <User className="size-5 text-purple-600" />
          <h3 className="text-gray-900">会員情報</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <User className="size-5 text-gray-400 mt-0.5" />
            <div className="flex-1">
              <p className="text-gray-600 text-sm">氏名</p>
              <p className="text-gray-900">山田 太郎</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <IdCard className="size-5 text-gray-400 mt-0.5" />
            <div className="flex-1">
              <p className="text-gray-600 text-sm">会員ID</p>
              <p className="text-gray-900">M-20240401</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="size-5 text-gray-400 mt-0.5" />
            <div className="flex-1">
              <p className="text-gray-600 text-sm">メールアドレス</p>
              <p className="text-gray-900">yamada.taro@example.com</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Phone className="size-5 text-gray-400 mt-0.5" />
            <div className="flex-1">
              <p className="text-gray-600 text-sm">電話番号</p>
              <p className="text-gray-900">090-1234-5678</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="size-5 text-gray-400 mt-0.5" />
            <div className="flex-1">
              <p className="text-gray-600 text-sm">住所</p>
              <p className="text-gray-900">東京都渋谷区...</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Calendar className="size-5 text-gray-400 mt-0.5" />
            <div className="flex-1">
              <p className="text-gray-600 text-sm">入会日</p>
              <p className="text-gray-900">2024年4月1日</p>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
          会員情報を編集
        </button>
      </Card>

      {/* 通知設定 */}
      <Card className="p-4">
        <h3 className="text-gray-900 mb-3">通知設定</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-900">イベント通知</p>
              <p className="text-gray-600 text-sm">必要なイベントを自動通知</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-900">更新リマインド</p>
              <p className="text-gray-600 text-sm">資格更新期限の通知</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-900">お知らせ配信</p>
              <p className="text-gray-600 text-sm">週次のお知らせ配信</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>
      </Card>
    </div>
  );
}
